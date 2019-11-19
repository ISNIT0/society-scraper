import { SocietyScraper } from "src/SocietyScraper";

export class StMarysTwickenham extends SocietyScraper {
    whitelist = true;
    universityName = 'St Marys Twickenham';
    entryUrl = 'https://www.stmaryssu.co.uk/societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'li.collapsable ul a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.inside-border-padding h1',
        description: 'div.inside-border-padding .section.default-body',
        email: 'div.inside-border-padding .section.default-body a[href^="mailto:"]',
        facebook: 'div.inside-border-padding .section.default-body a[href^="http://www.facebook"]',
        instagram: 'div.inside-border-padding a[href^="http://www.instagram"]',
        twitter: 'div.inside-border-padding a[href^="http://www.twitter"]',
        website: '.msl_web',
    };
}
