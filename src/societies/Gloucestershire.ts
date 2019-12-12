import { SocietyScraper } from "src/SocietyScraper";

export class Gloucestershire extends SocietyScraper {
    whitelist = false;
    universityName = 'Gloucestershire';
    entryUrl = 'https://www.yourstudentsunion.com/societies/join/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl-listingitem-link';
    // contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1:first-of-type',
        description: 'h1:nth-child(2) p',
        email: 'a[href^="mailto:"]',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
