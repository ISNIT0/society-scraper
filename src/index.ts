import minimist from 'minimist';
import * as societyScrapers from './societies';
import ora from 'ora';
import puppeteer, { ElementHandle } from 'puppeteer';
import { SocietyContext, SocietyScraper } from './SocietyScraper';
import { postProcessData } from './util';
import { join } from 'path';
import mkdirp = require('mkdirp');
import { StructuredStreamWriter, StructuredFormat } from 'structured-stream-writer';

const argv = minimist(process.argv.slice(2));

const outDir = join(process.cwd(), argv.outDir || `./out`);
if (!argv.outDir) {
    console.info(`[--outDir] not set, defaulting to [${outDir}]`);
}

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

const start = Date.now();
(async function () {
    console.log(`Beginning Scrape of [${Object.keys(societyScrapers).length}] societies at [${new Date()}]`);
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    try {
        const runDir = join(outDir, `${Date.now()}`);
        mkdirp.sync(runDir);
        const scrapers: SocietyScraper[] = Object.values(societyScrapers).map(s => new s());
        let validScrapers = scrapers.filter(s => s.whitelist);
        if (!validScrapers.length) validScrapers = scrapers;
        for (const scraper of validScrapers) {
            const scraperSpinner = ora(`Running scrape of [${scraper.societyName}]`).start();
            const scrapeFile = join(runDir, `${scraper.societyName}.json`);
            console.info(`Scraping [${scraper.societyName}] into [${scrapeFile}]`);
            const ssw = new StructuredStreamWriter(StructuredFormat.JSON, scrapeFile);

            await page.goto(scraper.entryUrl);

            const socContexts: SocietyContext[] = await scraper.getSocietiesContext(page);
            let index = -1;
            for (const context of socContexts) {
                try {
                    index += 1;
                    let el = context.el;
                    if (context.url) {
                        scraperSpinner.info(`[${index}/${socContexts.length}] Navigating to [${context.url}]`);
                        // console.info(`Navigating to [${context.url}] [${index}/${socContexts.length}]`);
                        await page.goto(context.url);
                        el = await page.$('body') as ElementHandle;
                    }
                    await page.evaluate(utils);
                    await ssw.writeItem(
                        postProcessData(scraper, await scraper.getSocietyData(el!)),
                    );
                } catch (err) {
                    console.warn(`Error on page:`, err);
                }
            }

            ssw.done();
            console.info(`Written [${scraper.societyName}] societies into [${scrapeFile}]`);
            scraperSpinner.succeed();
        }
    } finally {
        await page.close();
        await browser.close();
    }

})().then(() => {
    console.log(`Completed Scrape in [${Date.now() - start}ms]`);
}, (err) => {
    console.error(`Failed Scrape in [${Date.now() - start}ms]`, err);
});
