import { SocietyScraper } from "src/SocietyScraper";

export class RoyalAgriculturalUniversity extends SocietyScraper {
    whitelist = true;
    universityName = 'Royal Agricultural University';
    entryUrl = 'https://www.rausu.co.uk/activities/societies';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = '.treeview ul a';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: '.inside-border-padding h1',
        description: '.inside-border-padding p',
        email: '.inside-border-padding a[href^="https:mailto:"]',
        facebook: '.inside-border-padding a[href^="https://www.facebook"]',
        instagram: '.inside-border-padding a[href^="https://www.instagram"]',
        twitter: '.inside-border-padding a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
