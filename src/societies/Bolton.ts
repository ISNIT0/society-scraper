import { SocietyScraper } from "src/SocietyScraper";

export class Bolton extends SocietyScraper {
    whitelist = true;
    universityName = 'Bolton';
    entryUrl = 'https://www.boltonsu.com/all-societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.inside-border-padding tr a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.sochead', // Title needs slecting from the first page
        description: '.inside-border-padding ul',
        email: '.inside-border-padding a[href^="mailto:"]',
        facebook: '.inside-border-padding a[href^="https://www.facebook"]',
        instagram: '.inside-border-padding a[href^="https://www.instagram"]',
        twitter: '.inside-border-padding a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
