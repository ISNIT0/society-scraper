import { SocietyScraper } from "src/SocietyScraper";

export class FacebookTest extends SocietyScraper {
    whitelist = true;
    societyName = 'FacebookTest';
    entryUrl = 'https://www.facebook.com/search/groups/?q=australians%20in%20UK&epa=SERP_TAB';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    // contextSelector = '._1yt a._2ial';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '._ajw a',
        groupnumber: '._pac',
        description: '#description',
        email: '.msl_email',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
