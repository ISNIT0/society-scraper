import { SocietyScraper } from "src/SocietyScraper";

export class Teeside extends SocietyScraper {
    whitelist = true;
    universityName = 'Teeside';
    entryUrl = 'https://www.tees-su.org.uk/groups?group_type=society-2488&group_cat=media-201b4253-94a6-4169-858d-582d9ee55517&search=';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.uc-group-list-page-wrapper a';
    contextPaginate = '.uc-load-more-groups';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1', // need to have an ccount login for more info
        description: '#description',
        email: '.msl_email',  // need to have an ccount login for more info 
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
