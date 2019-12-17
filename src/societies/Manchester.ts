import { SocietyScraper } from "src/SocietyScraper";

export class Manchester extends SocietyScraper {
    whitelist = true;
    universityName = 'Manchester';
    entryUrl = 'https://manchesterstudentsunion.com/groups?group_type=club-society-782&group_cat=&search=';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.group-banner';
    contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.contentBoxes h1',
        description: '.contentBoxes p',
        email: '.contentBoxes  a[href^="mailto:"]',
        facebook: '.contentBoxes  a[href^="https://www.facebook"]',
        instagram: '.contentBoxes  a[href^="https://www.instagram"]',
        twitter: '.contentBoxes  a[href^="https://twitter"]',
        website: '.msl_web',
        linkedin: '.contentBoxes  a[href^="https://www.linkedin"]',
        youtube: '.contentBoxes  a[href^="https://www.youtube"]'
    };
}
