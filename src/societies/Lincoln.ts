import { SocietyScraper } from "src/SocietyScraper";

export class Lincoln extends SocietyScraper {
    whitelist = false;
    universityName = 'Lincoln';
    entryUrl = 'https://lincolnsu.com/activities/sports';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div#nav-2-1-default-hor-center--2.tab-pane.fade.active.show a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'h4+p:first-of-type',
        email: 'div.media.g-mb-30 a[href^="mailto:"]',
        facebook: 'div.media.g-mb-30 a[href^="https://facebook"]',
        instagram: 'div.media.g-mb-30 a[href^="https://instagram"]',
        twitter: 'div.media.g-mb-30 a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
