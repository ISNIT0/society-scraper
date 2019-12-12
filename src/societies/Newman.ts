import { SocietyScraper } from "src/SocietyScraper";

export class Newman extends SocietyScraper {
    whitelist = false;
    universityName = 'Newman';
    entryUrl = 'http://www.newmansu.org/societies.html';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.wsite-multicol a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.sochead', // needs selecting from first page
        description: '.main-wrap .wsite-section-content div.container .paragraph:nth-child(2)',
        email: 'a[href^="mailto:"]',
        facebook: 'a[href^="https://www.facebook"]',
        instagram: 'a[href^="https://www.facebook"]',
        twitter: 'a[href^="https://www.facebook"]',
        website: '.msl_web',
    };
}
