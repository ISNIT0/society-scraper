import { SocietyScraper } from "src/SocietyScraper";
import { ElementHandle } from "puppeteer";

export class Cambridge extends SocietyScraper {
    whitelist = false;
    universityName = 'Cambridge';
    entryUrl = 'https://www.cusu.co.uk/societies/directory/';
    contextSelector = '.listsocieties > li > a';
    dataSelectors = {
        title: 'h2',
        async _spread(elHandle: ElementHandle) {
            return elHandle.evaluate((el) => {
                return window.extractTable(el.querySelector('table.lines')!!);
            });
        }
    }
}
