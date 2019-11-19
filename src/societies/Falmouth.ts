import { SocietyScraper } from "src/SocietyScraper";

export class Falmouth extends SocietyScraper {
    whitelist = true;
    universityName = 'Falmouth';
    entryUrl = 'https://www.thesu.org.uk/studentopportunities/socs/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list>ul .msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h3.soc_header:nth-last-child(4)',
        description: '.tab-content p',
        email: '.msl-email-address',
        facebook: '.soc-facebook',
        instagram: '.soc-instagram',
        twitter: '.soc-twitter',
        website: '..soc-web',
    };
}