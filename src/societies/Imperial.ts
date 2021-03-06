import { SocietyScraper } from "src/SocietyScraper";

export class Imperial extends SocietyScraper {
    whitelist = false;
    universityName = 'Imperial';
    entryUrl = 'https://www.imperialcollegeunion.org/activities/a-to-z';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.view-content a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '.csp',
        website: '.csp-contact a[href^="http://www.union"]', 
        email: '.csp-contact a[href^="mailto"]', 
        facebook: '.csp-contact a[href^="https://www.facebook"]',
        twitter: '.csp-contact a[href^="https://twitter"]', 
    };
}
