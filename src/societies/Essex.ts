import { SocietyScraper } from "src/SocietyScraper";

export class Essex extends SocietyScraper {
    whitelist = false;
    societyName = 'Essex';
    entryUrl = 'https://www.essexstudent.com/southend/juststart/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'a[href^="mailto"]';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.col-md-6:nth-of-type(2) .container>p',
        description: '#description',
        email: 'a[href^="mailto"]',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}