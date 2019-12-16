import { SocietyScraper } from "src/SocietyScraper";

export class LeedsArts extends SocietyScraper {
    whitelist = false;
    universityName = 'Leeds Arts';
    entryUrl = 'https://www.leedsartsunion.org.uk/societiesandsports';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '#comp-jo75jht6itemsContainer a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h2',
        description: 'div#comp-jxd9h1xk.txtNew',
        email: 'a[href^="mailto:"]',
        facebook: 'a[href^="https://www.facebook"]',
        instagram: 'a[href^="https://www.instagram"]',
        twitter: 'a[href^="https://www.twitter"]',
        website: '.msl_web',
    };
}
