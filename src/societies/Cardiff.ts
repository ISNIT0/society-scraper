import { SocietyScraper } from "src/SocietyScraper";

export class Cardiff extends SocietyScraper {
    whitelist = true;
    societyName = 'Cardiff';
    entryUrl = 'https://www.cardiffstudents.com/activities/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '#full-list .msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '#organisation :nth-child(2).mslwidget',
        email: '.msl_email',
        facebook: '#soc-social>a[href^="https://www.facebook"]',
        instagram: '#soc-social>a[href^="https://www.instagram"]',
        twitter: '#soc-social>a[href^="https://twitter"]',
        website: 'div.website.threed.new',
        discord: 'a[href^="https://discord"]'
    };
}