import { SocietyScraper } from "src/SocietyScraper";

export class Demontfort extends SocietyScraper {
    whitelist = false;
    universityName = 'Demontfort';
    entryUrl = 'https://www.demontfortsu.com/activities/societies/browse-societies/';

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
        title: 'h1',
        description: '.panel-body p',
        email: '.msl-email-address',
        facebook: '.facebook',
        instagram: '.instagram',
        twitter: '.twitter',
        website: '.web',
    };
}
