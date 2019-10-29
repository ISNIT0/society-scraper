import { Page, ElementHandle } from "puppeteer";
import { resolve } from "url";
import { sleep, getTags } from "./util";

export type SocietyData = any; // TODO: define properly

export interface SocietyContext {
    url?: string;
    el?: ElementHandle;
}

export abstract class SocietyScraper {
    contextPaginate?: string;
    whitelist?: boolean;
    abstract societyName: string;
    abstract entryUrl: string;
    public async getSocietiesContext(page: Page): Promise<SocietyContext[]> {
        if (!this.contextSelector) {
            throw new Error(`Neither [getSocietiesContext()] or [contextSelector] have been overridden`);
        }
        const socEls = await page.$$(this.contextSelector);
        const contexts = await Promise.all(
            Array.from(socEls)
                .map(async (socEl) => {
                    const tagName = await socEl.evaluate((el) => el.tagName);
                    if (tagName === 'A') {
                        return {
                            url: resolve(this.entryUrl, await socEl.evaluate((a) => a.getAttribute('href')) as string),
                        };
                    } else {
                        return {
                            el: socEl,
                        };
                    }
                })
        );
        const nextPageExists = this.contextPaginate && await page.$(this.contextPaginate);
        if (this.contextPaginate && nextPageExists) {
            console.log(`Paginating context querying`);
            const newHref = await nextPageExists.evaluate((el) => el.getAttribute('href'));
            if (newHref) {
                await page.goto(resolve(this.entryUrl, newHref));
            } else {
                await page.click(this.contextPaginate);
                await sleep(1000);
            }
            const nextContexts = await this.getSocietiesContext(page);
            return contexts.concat(nextContexts as any);
        } else {
            return contexts;
        }
    }
    abstract contextSelector?: string;

    public async getSocietyData(element: ElementHandle): Promise<SocietyData> {
        if (!this.dataSelectors) {
            throw new Error(`Neither [getSocietyData()] or [dataSelectors] have been overridden`);
        }
        const ret: SocietyData = {
            url: await element.evaluate(() => location.href),
        };
        for (const [key, selector] of Object.entries(this.dataSelectors)) {
            try {
                if (typeof selector === 'function') {
                    const val = await selector(element);
                    if (key === '_spread') {
                        Object.assign(ret, val);
                    } else {
                        ret[key] = val;
                    }
                    continue;
                }
                const { textContent, href } = await element.$eval(selector!, (el) => {
                    return {
                        textContent: window.extractText(el).trim(),
                        href: el.getAttribute('href'),
                    };
                });
                if (href) {
                    if (href.startsWith('mailto:')) {
                        ret[key] = href.replace('mailto:', '');
                        continue;
                    } else {
                        ret[key] = href;
                    }
                } else {
                    ret[key] = textContent;
                }
            } catch (err) {
                // console.warn(`Failed to get [${selector}]`, err);
            }
        }
        if (ret.description) {
            ret.tags = getTags(ret.description);
        }
        return ret;
    };
    abstract dataSelectors?: {
        title: string | ((el: ElementHandle) => Promise<any>),
        url?: string,
        description?: string,
        email?: string,
        secretaryName?: string,
        [key: string]: string | ((el: ElementHandle) => Promise<any>) | undefined,
    }
}
