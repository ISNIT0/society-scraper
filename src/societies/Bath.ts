import { SocietyScraper } from "src/SocietyScraper";

export class bath extends SocietyScraper {
    whitelist = false;
    societyName = 'bath';
    entryUrl = 'https://www.thesubath.com/socs/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.msl_organisation_list a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.page-title',
        description: '#grp-descrip~p',
        email: '#desktop-side-links .msl_email',
        facebook: '#desktop-side-links .msl_facebook',
        instagram: '#desktop-side-links .msl_instagram',
        twitter: '#desktop-side-links .msl_twitter',
    };
}
