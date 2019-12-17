import { SocietyScraper } from "src/SocietyScraper";

export class York extends SocietyScraper {
    whitelist = true;
    universityName = 'York';
    entryUrl = 'https://yusu.org/student-life/clubs-and-socs#societies-a-z';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.activity-article.g-mb-30> a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '.col-lg-8 p:nth-child(3)',
        email: '.media-body a[href^="mailto:"]',
        facebook: '.media-body a[href^="https://facebook"]',
        instagram: '.msl_instagram',
        twitter: '.media-body a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
