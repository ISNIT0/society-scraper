import { SocietyScraper } from "src/SocietyScraper";

export class Chester extends SocietyScraper {
    whitelist = true;
    universityName = 'Chester';
    entryUrl = 'https://www.chestersu.com/activities/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.page-title',
        description: '#organisation .mslwidget p',
        email: '#organisation .mslwidget a[href^="mailto:"]',
        facebook: '#organisation .mslwidget a[href^="https://www.facebook"]',
        instagram: '#organisation .mslwidget a[href^="https://www.instagram"]',
        twitter: '#organisation .mslwidget a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
