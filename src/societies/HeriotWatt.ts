import { SocietyScraper } from "src/SocietyScraper";

export class HeriotWatt extends SocietyScraper {
    whitelist = false;
    universityName = 'Heriot-Watt';
    entryUrl = 'https://www.hwunion.com/get-involved/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'ul.msl_organisation_list a:nth-child(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'div.desc-c>:nth-child(2)',
        email: 'div.socialmedia-c a.socemail',
        facebook: 'div.socialmedia-c a.facebook',
        instagram: 'div.socialmedia-c a.socinsta',
        twitter: 'div.socialmedia-c a.twitter',
        website: 'a.website',
    };
}
