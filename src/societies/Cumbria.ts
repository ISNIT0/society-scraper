import { SocietyScraper } from "src/SocietyScraper";

export class Cumbria extends SocietyScraper {
    whitelist = false;
    universityName = 'Cumbria';
    entryUrl = 'https://www.ucsu.me/groups';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.uc-group-list-page-wrapper a';
     contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title h1',
        description: '.portlet>.contentBoxes p',
        email: '.contentBoxes a[href^="mailto:"]',
        facebook: '.contentBoxes a[href^="https://www.facebook"]',
        instagram: '.contentBoxes a[href^="https://www.instagram"]',
        twitter: '.contentBoxes a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
