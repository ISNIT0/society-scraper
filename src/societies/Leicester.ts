import { SocietyScraper } from "src/SocietyScraper";

export class Leicester extends SocietyScraper {
    whitelist = false;
    societyName = 'Leicester';
    entryUrl = 'https://www.leicesterunion.com/opportunities/societies/findasociety/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list a:nth-child(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.title-c h1',
        description: '#description',
        email: '.col-sm-8 a[href^=mailto]',
        facebook: 'div.socialmedia-c .socfacebook',
        instagram: 'div.socialmedia-c .socinstagram',
        twitter: 'div.socialmedia-c .soctwitter',
        website: 'div.socialmedia-c .website',
    };
}
