import minimist from 'minimist';
import * as societyScrapers from './societies';
import puppeteer, { ElementHandle, Browser, Page } from 'puppeteer';
import { SocietyContext, SocietyScraper } from './SocietyScraper';
import { postProcessData, sleep } from './util';
import { join } from 'path';
import mkdirp = require('mkdirp');
import { StructuredStreamWriter, StructuredFormat } from 'structured-stream-writer';

const argv = minimist(process.argv.slice(2));

const outDir = join(process.cwd(), argv.outDir || `./out`);
if (!argv.outDir) {
    console.info(`[--outDir] not set, defaulting to [${outDir}]`);
}
const parallel = argv.parallel || 4;
console.info(`Using [--parallel=${parallel}]`);

const utils = () => {
    window.preProcessVal = function preProcessVal(str) {
        if (!str.includes('@')) {
            return str.toLowerCase().replace(/[^A-z ]/g, '').trim();
        } else {
            return str.trim();
        }
    }
    window.extractTable = function extractTable(el, horizontal = true) {
        const trs = Array.from(el.querySelectorAll('tr'));
        const values = trs
            .map(tr => Array.from(tr.querySelectorAll('td')))
            .reduce((acc: any, [col1, col2]) => {
                const key = window.preProcessVal(col1.textContent!!);
                let val = window.preProcessVal(col2.textContent!!);
                if (col2.querySelector('a')) {
                    val = col2.querySelector('a')!!.getAttribute('href') as string;
                }

                acc[key] = val;
                return acc;
            }, {});
        return values;
    }
    window.extractText = function extractText(el) {
        const anchors = Array.from(el.querySelectorAll('a'));
        for (const a of anchors) {
            a.textContent = a.textContent + ` (${a.getAttribute('href')})`;
        }
        return el.textContent as string;
    }
};

declare global {
    interface Window {
        extractTable: (el: Element, horizontal?: boolean) => { [key: string]: string };
        preProcessVal: (str: string) => string;
        extractText: (el: Element) => string;
    }
}

class ParallelBrowser {
    private browser!: Browser;
    private pages: Page[] = [];
    private parallel: number = 1;
    private claimRequest: Promise<Page> = Promise.resolve(null) as any;

    constructor(parallel: number) {
        this.parallel = Math.abs(Math.max(1, parallel));
    }

    public async init() {
        this.browser = await puppeteer.launch({ headless: false, defaultViewport: null });

        for (let i = 0; i < this.parallel; i++) {
            const page = await this.browser.newPage();
            page.on('dialog', async dialog => {
                console.log(`Dismissing dialog from [${page.url}]:`, dialog.message());
                await dialog.dismiss();
            });
            (page as any).currentRequest = Promise.resolve();
            this.pages.push(page);
        }
    }

    public async claimPage(): Promise<Page> {
        const claimRequest = this.claimRequest.then(() => {
            return new Promise<Page>(async (resolve) => {
                const page = await Promise.race(this.pages.map((p: any) => p.currentRequest.then(() => p)));
                page.currentRequest = page.currentRequest.then(() => {
                    return new Promise((resolve) => {
                        page.release = resolve;
                    });
                });
                resolve(page);
            });
        });

        this.claimRequest = claimRequest;
        return claimRequest;
    }

    public async releasePage(page: Page) {
        (page as any).release();
    }

    public close() {
        this.browser.close();
    }
}

const start = Date.now();
(async function () {
    console.log(`Beginning Scrape of [${Object.keys(societyScrapers).length}] Universities at [${new Date()}]`);
    const browser = new ParallelBrowser(parallel);
    await browser.init();

    try {
        const runDir = join(outDir, `${Date.now()}`);
        mkdirp.sync(runDir);
        const scrapers: SocietyScraper[] = Object.values(societyScrapers).map(s => new s());
        let validScrapers = scrapers.filter(s => s.whitelist);
        if (!validScrapers.length) validScrapers = scrapers;
        await Promise.all(
            validScrapers.map(async (scraper) => {
                const page = await browser.claimPage();
                const scrapeFile = join(runDir, `${scraper.universityName}.json`);
                console.info(`Running scrape of [${scraper.universityName}] into [${scrapeFile}]`);
                const ssw = new StructuredStreamWriter(StructuredFormat.JSON, scrapeFile);

                try {
                    await page.goto(scraper.entryUrl);

                    const socContexts: SocietyContext[] = await scraper.getSocietiesContext(page);
                    let index = -1;
                    for (const context of socContexts) {
                        await sleep(1000);
                        try {
                            index += 1;
                            let el = context.el;
                            if (context.url) {
                                // scraperSpinner.info(`[${index}/${socContexts.length}] Navigating to [${context.url}]`);
                                // console.info(`Navigating to [${context.url}] [${index}/${socContexts.length}]`);
                                await page.goto(context.url);
                                el = await page.$('body') as ElementHandle;
                            }
                            await page.evaluate(utils);
                            await ssw.writeItem(
                                postProcessData(scraper, await scraper.getSocietyData(el!)),
                            );
                        } catch (err) {
                            console.warn(`[${context.url}] Error on page:`, err);
                        }
                    }

                    console.info(`Written [${scraper.universityName}] societies into [${scrapeFile}]`);
                } catch (err) {
                    console.warn(`Failed to get [${scraper.universityName}]`, err);
                }
                ssw.done();
                // scraperSpinner.succeed();
                await browser.releasePage(page);
            })
        );
    } finally {
        await browser.close();
    }

})().then(() => {
    console.log(`Completed Scrape in [${Date.now() - start}ms]`);
}, (err) => {
    console.error(`Failed Scrape in [${Date.now() - start}ms]`, err);
});
