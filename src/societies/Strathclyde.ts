import { SocietyScraper } from "src/SocietyScraper";

export class Strathclyde extends SocietyScraper {
    whitelist = false;
    societyName = 'Strathclyde';
    entryUrl = 'https://www.strathunion.com/clubs-socs/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list a:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'div.title',
        description: 'div.contentBoxes>p:nth-of-type(3)',
        email: 'div.mslwidget a.msl_email',
        facebook: 'a.msl_facebook',
        instagram: 'a.msl_instagram',
        twitter: 'a.msl_twitter',
        website: 'div.mslwidget.website> a',
    };
}
