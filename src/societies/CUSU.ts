import { SocietyScraper } from "src/SocietyScraper";
import { ElementHandle } from "puppeteer";

export class CUSU extends SocietyScraper {
    whitelist = false;
    societyName = 'CUSU';
    entryUrl = 'https://www.cusu.co.uk/societies/directory/';
    contextSelector = '#listinggrid > div > a';
    dataSelectors = {
        title: 'h2',
        async _spread(elHandle: ElementHandle) {
            return elHandle.evaluate((el) => {
                return window.extractTable(el.querySelector('table.lines')!!);
            });
        }
    }
}
