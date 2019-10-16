import { SocietyScraper } from "src/SocietyScraper";

export class UCL extends SocietyScraper {
    whitelist = true;
    societyName = 'UCL';
    entryUrl = 'http://studentsunionucl.org/clubs-societies/directory';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.search-index__results .clubs'; //there are multiple pages, not sure how to select next page in the cod

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.banner__title--background',
        description: '.field.field-name-body.field-type-text-with-summary.field-label-hidden>.field-items',
        email: '.msl_email', // I cant get links to work
    };
}
