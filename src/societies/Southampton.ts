import { SocietyScraper } from "src/SocietyScraper";

export class Southampton extends SocietyScraper {
    whitelist = true;
    societyName = 'Southampton';
    entryUrl = 'https://www.susu.org/opportunities/societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '#societies .row a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h2',
        description: '.main.container',
        email: '.contactbuttons a[href*="mailto:"]', 
        facebook: '.contactbuttons a[href*="facebook"]',
        instagram: '.contactbuttons a[href*="instagram"]',
        twitter: '.contactbuttons a[href*="twitter"]',
        website: '.contactbuttons a[href*="https://aim."]',
    };
}
