import { SocietyScraper } from "src/SocietyScraper";
import { ElementHandle } from "puppeteer";

export class CUSU extends SocietyScraper {
    whitelist = false;
    societyName = 'CUSU';
    entryUrl = 'https://www.cusu.co.uk/societies/directory/';
    contextSelector = '#listinggrid > div > a';
    async getSocietyData(element: ElementHandle) {
        let vals = await element.evaluate((el) => {
            const title = el.querySelector('h2')!!.textContent;
            const description = Array.from(el.querySelectorAll('#organisationinfo p')).slice(0, 2).map(window.extractText).join('\n');
            const tableData = window.extractTable(el.querySelector('table.lines')!!);
            return Object.assign(tableData, {
                title,
                description,
            });
        });
        return vals;
    }
    dataSelectors = {} as any;
}
