import { SocietyScraper } from "src/SocietyScraper";

export class Coventry extends SocietyScraper {
    whitelist = false;
    universityName = 'Coventry';
    entryUrl = 'https://www.cusu.org/societies/a-z-societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list .msl-gl-content a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.cell h2',
        description: '.mslwidget p:nth-of-type(1),.mslwidget p:nth-of-type(2)',
        email: '.msl_email',
        facebook: '.mslwidget a[href^="https://www.facebook"]',
        instagram: '.mslwidget a[href^="https://www.instragram',
        twitter: '.mslwidget a[href^="https://twitter',
        website: '.msl_web',
    };
}
