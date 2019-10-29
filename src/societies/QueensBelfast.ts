import { SocietyScraper } from "src/SocietyScraper";

export class QueensBelfast extends SocietyScraper {
    whitelist = false;
    societyName = 'QueensBelfast';
    entryUrl = 'http://www.qubsu.org/ClubsSocieties/A-MList/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'a[href^="/sites/qubsu/ClubsSocieties"]';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h3',
        description: 'h3+p',
        email: 'a[href^="mailto:"]',
        facebook: '#left-column a[href^="http://www.facebook.com"]',
        instagram: '#left-column a[href^="https://instagram"]',
        twitter: '#left-column a[href^="https://twitter.com"]',
        website: '.msl_web',
    };
}
