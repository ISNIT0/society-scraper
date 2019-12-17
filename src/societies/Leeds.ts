import { SocietyScraper } from "src/SocietyScraper";

export class Leeds extends SocietyScraper {
    whitelist = true;
    universityName = 'Leeds';
    entryUrl = 'https://www.luu.org.uk/clubs-and-societies/';

    /* contextSelector
    If each society has it's own web-page, contextSelector should select all <a> elements that point to pages.
    Otherwise, it should select the highest level element that contains just the society
    */
    contextSelector = 'a[href^="/clubs-and-societies/academic/','a[href^="/clubs-and-societies/culture/', 
    'a[href^="/clubs-and-societies/dance/',
'a[href^="/clubs-and-societies/faith/',
'a[href^="/clubs-and-societies/general-inerest/',
'a[href^="/clubs-and-societies/martial-arts/',
'a[href^="/clubs-and-societies/media/',
'a[href^="/clubs-and-societies/outdoor/',
'a[href^="/clubs-and-societies/political-campaigning/',
'a[href^="/clubs-and-societies/sports/',
'a[href^="/clubs-and-societies/volunteering/',
'a[href^="/clubs-and-societies/welfare/',

    contextSelector = '.section.section.section--white .container .row a.club';


    // contextPaginate = '.next-page > a';

    /* dataSelectors
    The dataSelectors will be run once for each context that was selected above.
    If the context was an <a>, the dataSelector will be run in the new webpage.
    If the context was a container, the dataSelector will be run only within that element.

    The values extracted by selected elements will be assigned to the corresponding key (e.g. the "title" will be the textContent of "h1.sochead")
    */
    dataSelectors = {
        title: 'h1',
        description: 'h2+p:nth-of-type(1)',
        email: 'a[href^="mailto:',
        facebook: '.msl_facebook',
        instagram: '.msl_instagram',
        twitter: '.msl_twitter',
        website: '.msl_web',
    };
}
