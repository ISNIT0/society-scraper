import { SocietyScraper } from "src/SocietyScraper";

export class Keele extends SocietyScraper {
    whitelist = true;
    universityName = 'Keele';
    entryUrl = 'https://keelesu.com/activities/clubs-societies//';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.msl_organisation_list a:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'div.mslwidget>p:nth-of-type(1)',
        email: 'a.socemail',
        facebook: 'a.socfacebook',
        instagram: 'a.socinstagram',
        twitter: 'a.soctwitter',
        website: 'a.website',
    };
}
