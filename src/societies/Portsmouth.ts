import { SocietyScraper } from "src/SocietyScraper";

export class Portsmouth extends SocietyScraper {
    whitelist = true;
    universityName = 'Portsmouth';
    entryUrl = 'https://membership.upsu.net/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.list-group a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.mega',
        description: 'div.container-fluid.marginBottom p',
        email: 'div.container-fluid a[href^="#contact',
        facebook: 'div.container-fluid.bg.invert.semiBg.marginBottom a[href^="https://www.facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
