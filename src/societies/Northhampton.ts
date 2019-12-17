import { SocietyScraper } from "src/SocietyScraper";

export class Northhamptoon extends SocietyScraper {
    whitelist = true;
    universityName = 'Northhampton';
    entryUrl = 'https://northamptonunion.com/get-involved/sports-and-societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.row.g-mb-10 a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'h4+p',
        email: 'a[href^="mailto:"]', // need to rmeove bottom email
        facebook: 'a[href^="https://facebook"]',
        instagram: 'a[href^="https://instagram"]',
        twitter: 'a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
