import { SocietyScraper } from "src/SocietyScraper";

export class Derby extends SocietyScraper {
    whitelist = false;
    universityName = 'Derby';
    entryUrl = 'https://www.derbyunion.co.uk/getinvolved/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list>ul .unionclub a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '.main-content__content p',
        email: 'a.btn.btn-email',
        facebook: 'a[href^="https://www.facebook"]',
        instagram: 'a[href^="http://instagram"]',
        twitter: 'tr a[href^="http://twitter"]',
        website: '.msl_web',
        youtube: 'a[href^="http://youtube"]'
    };
}
