import { SocietyScraper } from "src/SocietyScraper";

export class Aberystwyth extends SocietyScraper {
    whitelist = false;
    societyName = 'Aberystwyth';
    entryUrl = 'https://www.abersu.co.uk/teamaber/societies/societieslist/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list a:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '#organisation>p:first-of-type',
        description: '#organisation .mslwidget p',
        email: '.container.content a[href^="mailto:"]',
        facebook: '.container.content a[href^="https://www.facebook"]',
        instagram: '.container.content a[href^="https://www.instagram"]',
        twitter: '.container.content a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
