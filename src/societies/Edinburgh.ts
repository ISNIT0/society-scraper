import { SocietyScraper } from "src/SocietyScraper";

export class Edinburgh extends SocietyScraper {
    whitelist = false;
    universityName = 'Edinburgh';
    entryUrl = 'https://www.eusa.ed.ac.uk/activities/societies/findasociety/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'ul.msl_organisation_list:nth-child(1) > li > a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '#tab-about',
        email: '.msl_email',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
