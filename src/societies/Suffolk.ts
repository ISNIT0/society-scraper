import { SocietyScraper } from "src/SocietyScraper";

export class Suffolk extends SocietyScraper {
    whitelist = false;
    universityName = 'Suffolk';
    entryUrl = 'https://www.uosunion.org/societies/joinasociety/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list>ul a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title-c h1',
        description: '.desc-c p',
        email: '#organisation a[href^="mailto:"]',
        facebook: '#organisation a[href^="https://wwww.facebook"]',
        instagram: '#organisation a[href^="https://wwww.instagram"]',
        twitter: '#organisation a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
