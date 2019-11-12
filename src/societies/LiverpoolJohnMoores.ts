import { SocietyScraper } from "src/SocietyScraper";

export class LiverpoolJohnMoores extends SocietyScraper {
    whitelist = false;
    societyName = 'LiverpoolJohnMoores';
    entryUrl = 'https://www.jmsu.co.uk/groups';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.group-box';
    contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title h1',
        description: 'td p',
        email: 'a[href^="mailto:"',
        facebook: '.msl_facebook', //not href
        instagram: '.msl_instagram', // not a href
        twitter: '.msl_twitter', // not a href
        website: '.msl_web', // not a href
    };
}
