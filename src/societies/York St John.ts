import { SocietyScraper } from "src/SocietyScraper";

export class YorkStJohn extends SocietyScraper {
    whitelist = false;
    universityName = 'York St John';
    entryUrl = 'https://ysjsu.com/activities/Societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.card-block.g-pa-15 a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '.profile-bio p',
        email: '.panel-body a[href^="mailto:"]',
        facebook: '.panel-body a[href^="https://www.facebook"]',
        instagram: '.panel-body a[href^="https://www.instagram"]',
        twitter: '.panel-body a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
