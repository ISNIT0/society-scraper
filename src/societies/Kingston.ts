import { SocietyScraper } from "src/SocietyScraper";

export class Kingston extends SocietyScraper {
    whitelist = false;
    universityName = 'Kingston';
    entryUrl = 'https://www.kingstonstudents.net/societies/a-z-of-societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '#societies-wrap a'; //someimtes a will repeat, no idea why?
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title h1',
        description: 'div.portlet',
        email: 'div.portlet a[href^="mailto:"]',
        facebook: 'div.portlet a[href^="https://www.facebook"]',
        instagram: 'div.portlet a[href^="https://www.instagram"]',
        twitter: 'div.portlet a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
