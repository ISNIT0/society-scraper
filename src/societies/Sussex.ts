import { SocietyScraper } from "src/SocietyScraper";

export class Sussex extends SocietyScraper {
    whitelist = false;
    societyName = 'Sussex';
    entryUrl = 'https://www.sussexstudent.com/sport-societies-media/discover/';

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
        title: '.row.soc-template-changed>.col-md-8>h2',
        description: '.mslwidget h4:first-of-type',
        email: '.msl_email',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
