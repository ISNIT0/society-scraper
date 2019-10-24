import { SocietyScraper } from "src/SocietyScraper";

export class Dundee extends SocietyScraper {
    whitelist = false;
    societyName = 'Dundee';
    entryUrl = 'https://www.dusa.co.uk/get-involved/societies/a-z/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.et_pb_portfolio_items_wrapper.clearfix a:nth-of-type(odd)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'div.et_pb_text_inner',
        email: '.et_pb_button_wrapper a[href^="mailto"]',
        facebook: 'h4.et_pb_module_header a[href^="https://www.facebook"]',
        instagram: 'h4 a[href^="https://www.instagram"]',
        twitter: 'h4 a[href^="https://twitter"]',
        website: '.msl_web',
    };
}
