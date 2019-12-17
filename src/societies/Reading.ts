import { SocietyScraper } from "src/SocietyScraper";

export class Reading extends SocietyScraper {
    whitelist = true;
    universityName = 'Reading';
    entryUrl = 'https://www.rusu.co.uk/student-activities/societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'div.col-12.col-md-6.col-xl-4.sec-mar-bottom a:last-of-type:nth-of-type(even)';
    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1.sochead',
        description: '#description',
        email: '.msl_email',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
