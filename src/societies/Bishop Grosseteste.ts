import { SocietyScraper } from "src/SocietyScraper";

export class BishopGrosseteste extends SocietyScraper {
    whitelist = false;
    universityName = 'Bishop Grosseteste';
    entryUrl = 'https://www.bgsu.co.uk/opportunities/clubs_socs/';

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
        title: '#organisation h1',
        description: '#tab-about p',
        email: '#tab-about p a[href^="mailto:"]',
        facebook: '#tab-about p a[href^="https://www.facebook"]',
        instagram: '#tab-about p a[href^="https://www.instagram"]',
        twitter: '#tab-about p a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
