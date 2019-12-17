import { SocietyScraper } from "src/SocietyScraper";

export class Kent extends SocietyScraper {
    whitelist = true;
    universityName = 'Kent';
    entryUrl = 'https://kentunion.co.uk/activities#tab--societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div#tab .container.g-pt-20 a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'p.mb-0',
        email: '.div.media-body a[href^="mailto:"]',
        facebook: 'div.media-body a[href^="https://facebook"]',
        instagram: 'div.media-body a[href^="https://instagram"]',
        twitter: 'div.media-body a[href^="https://twitter"]',
        website: '.msl_web',
        Youtube: 'div.media-body a[href^="https://youtube"]'
    };
}
