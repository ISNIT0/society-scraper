import { SocietyScraper } from "src/SocietyScraper";

export class Bedfordshire extends SocietyScraper {
    whitelist = true;
    universityName = 'Bedfordshire';
    entryUrl = 'https://www.bedssu.co.uk/groups?group_type=&group_cat=&search=';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'ul.msl_organisation_list > li > a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.sochead',
        description: '#description',
        email: '.contentBoxes a[href^="mailto:"]',
        facebook: '.contentBoxes a[href^="https://www.facebook"]',
        instagram: '.contentBoxes a[href^="https://www.instagram"]',
        twitter: '.contentBoxes a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
