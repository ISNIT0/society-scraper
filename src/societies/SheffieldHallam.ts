import { SocietyScraper } from "src/SocietyScraper";

export class Sheffieldhallam extends SocietyScraper {
    whitelist = true;
    universityName = 'Sheffield Hallam';
    entryUrl = 'https://www.hallamstudentsunion.com/get_involved/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list a.msl-gl-link';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '#organisation>.row:nth-child(1) h3', // Need to take out 'societes' from title
        description: '#organisation .rightcol .mslwidget:first-of-type',
        email: '.contactus>.on-sale .msl-email-address',
        facebook: '.contactus>.on-sale .facebook',
        instagram: '..contactus>.on-sale .msl_instagram',
        twitter: '.contactus>.on-sale .twitter',
        website: '.contactus>.on-sale .msl-web-address',
    };
}
