import { SocietyScraper } from "src/SocietyScraper";

export class RoyalHolloway extends SocietyScraper {
    whitelist = false;
    universityName = 'RoyalHolloway';
    entryUrl = 'https://www.su.rhul.ac.uk/societies/a-z/#';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'ul.msl_organisation_list a:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'h2:nth-child(1) +p',
        email: 'dd.msl-email-address',
        facebook: '.msl_facebook', // there but cant select
        instagram: '.msl_instagram', // there but cant select
        twitter: '.msl_twitter', // there but cant select
        website: '.msl_web', // there but cant select
    };
}
