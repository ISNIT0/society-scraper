import { SocietyScraper } from "src/SocietyScraper";

export class GlasgowCaledonian extends SocietyScraper {
    whitelist = false;
    universityName = 'Glasgow Caledonian';
    entryUrl = 'https://www.gcustudents.co.uk/groups?group_type=societies-1046';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.category-box-wrapper a';
    // contextPaginate = '..pager-next a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title h1',
        description: '.contentBoxes p',
        email: '.contentBoxes a[href^="mailto:"]',
        facebook: '.contentBoxes a[href^="https://www.facebook"]',
        instagram: '.contentBoxes a[href^="https://www.instagram"]',
        twitter: '.contentBoxes a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
