import { SocietyScraper } from "src/SocietyScraper";

export class LondonSouthBank extends SocietyScraper {
    whitelist = false;
    universityName = 'London South Bank';
    entryUrl = 'https://www.lsbsu.org/activities/societies_sportsclubs/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list>ul a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.org-name',
        description: 'div.col-md-9',
        email: 'a[href^="mailto:"]',
        facebook: 'a[href^="http://www.facebook"]',
        instagram: 'a[href^="http://www.instagram"]',
        twitter: 'a[href^="http://twitter"]',
        website: '.msl_web',
    };
}
