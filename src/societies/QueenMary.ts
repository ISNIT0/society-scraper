import { SocietyScraper } from "src/SocietyScraper";

export class QueenMary extends SocietyScraper {
    whitelist = false;
    universityName = 'QueenMary';
    entryUrl = 'https://www.qmsu.org/societies/findme/all/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.col-md-8 .mslwidget>.msl_organisation_list>ul a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.area.intro h1:not(.mslwidget)',
        description: 'div.area>.mslwidget>p',
        email: '.msl_email',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
