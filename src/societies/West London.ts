import { SocietyScraper } from "src/SocietyScraper";

export class WestLondon extends SocietyScraper {
    whitelist = true;
    universityName = 'West London';
    entryUrl = 'https://www.uwlsu.com/get-involved/societies//';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '',  // cant get page acces without a log in
        description: '',
        email: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
    };
}
