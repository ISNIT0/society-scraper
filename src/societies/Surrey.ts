import { SocietyScraper } from "src/SocietyScraper";

export class Surrey extends SocietyScraper {
    whitelist = false;
    universityName = 'Surrey';
    entryUrl = 'https://www.ussu.co.uk/getinvolved/clubs';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'ol.items-filtered> li> a'; // needs a selecotr for 'cacnel' with a pop up to log in
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.sochead', // every page is unique
        description: '#description', 
        email: '.col_right a[href^="mailto:"]', 
        facebook: '.col_right a[href^="https://www.facebook"]', 
        instagram: '.col_right a[href^="https://www.instagram"]', 
        twitter: '.col_right a[href^="https://www.twitter"]', 
        website: '.msl_web', 
    };
}
