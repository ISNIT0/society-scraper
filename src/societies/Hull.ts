import { SocietyScraper } from "src/SocietyScraper";

export class Hull extends SocietyScraper {
    whitelist = true;
    universityName = 'Hull';
    entryUrl = 'https://hulluniunion.com/societies/list';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '#societies-list a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.container h1',
        description: '.container h4 ~ p',
        email: '.media-body a[href^="mailto:"]',
        facebook: 'section.g-bg-secondary.g-py-20 div.container>.row a[href^="https://www.facebook"]',
        instagram: 'section.g-bg-secondary.g-py-20 div.container>.row a[href^="https://www.instagram"]',
        twitter: 'section.g-bg-secondary.g-py-20 div.container>.row a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
