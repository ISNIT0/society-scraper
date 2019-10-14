import { SocietyScraper } from "src/SocietyScraper";

export class NUSU extends SocietyScraper {
    whitelist = false;
    societyName = 'NUSU';
    entryUrl = 'https://www.nusu.co.uk/getinvolved/societies/list/';
    contextSelector = '.msl_organisation_list > li a';
    dataSelectors = {
        title: 'h1.sochead',
        description: '#description',
        email: '.msl_email',
    };
}
