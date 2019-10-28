import { SocietyScraper } from "src/SocietyScraper";

export class NottinghamTrent extends SocietyScraper {
    whitelist = false;
    societyName = 'NottinghamTrent';
    entryUrl = 'https://www.trentstudents.org/groups?group_type=societies-1013&group_cat=&search=';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.ninecol.group-list.last a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'div.title',
        description: 'div.contentBoxes>p:nth-of-type(3)',
        email: 'div.contentBoxes a[href^="mailto:"]',
        facebook: 'div.contentBoxes a[href^="https://www.facebook"]',
        instagram: 'div.contentBoxes a[href^="https://www.instagram"]',
        twitter: 'div.contentBoxes a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
