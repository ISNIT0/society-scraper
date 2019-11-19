import { SocietyScraper } from "src/SocietyScraper";

export class Sheffield extends SocietyScraper {
    whitelist = false;
    universityName = 'Sheffield';
    entryUrl = 'https://yoursu.sheffield.ac.uk/groups';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.uc-group-list-page-wrapper> a';
    contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title:nth-child(1)',
        description: 'span.s1',
        email: 'a[href^="mailto"]',
        facebook: 'a[href^="https://www.facebook"]',
        instagram: 'a[href^="https://instagram"]',
        twitter: 'a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
