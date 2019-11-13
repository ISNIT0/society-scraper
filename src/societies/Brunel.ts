import { SocietyScraper } from "src/SocietyScraper";

export class Brunel extends SocietyScraper {
    whitelist = false;
    societyName = 'Brunel';
    entryUrl = 'https://brunelstudents.com/societies/a-z/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list>ul a:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: '#organisation .mslwidget p',
        email: '#organisation .msl_email',
        facebook: '#organisation .msl_facebook',
        instagram: '#organisation .msl_instagram',
        twitter: '#organisation .msl_twitter',
        website: '#organisation .msl_web',
    };
}
