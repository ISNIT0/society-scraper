import { SocietyScraper } from "src/SocietyScraper";
import { ElementHandle } from "puppeteer";

export class LSE extends SocietyScraper {
    whitelist = false;
    societyName = 'LSE';
    entryUrl = 'https://www.lsesu.com/join-in/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list>li>a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title(elHandle:ElementHandle) {
            return elHandle.evaluate(() => {
                return document.title;
            });
        },
        description: '.col-md-8>:nth-child(3)',
        email: '.msl_email',
    };
}
