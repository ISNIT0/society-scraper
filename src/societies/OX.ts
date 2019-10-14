import { SocietyScraper } from "src/SocietyScraper";

export class OX extends SocietyScraper {
    whitelist = false;
    societyName = 'OX';
    entryUrl = 'https://www.ox.ac.uk/students/life/clubs/list?wssl=1';
    contextSelector = '.more-less > table tr:not(:first-child)';
    dataSelectors = {
        title: 'td',
        url: 'td a',
        secretaryName: 'td:nth-child(2)',
        secretaryEmail: 'td:nth-child(2) a',
    }
}
