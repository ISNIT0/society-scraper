import { SocietyScraper } from "src/SocietyScraper";

export class Oxford extends SocietyScraper {
    whitelist = false;
    universityName = 'Oxford';
    entryUrl = 'https://www.ox.ac.uk/students/life/clubs/list?wssl=1';


    contextSelector = '.more-less > table tr:not(:first-child)';
    dataSelectors = {
        title: 'td',
        url: 'td:nth-child(1) a',
        secretaryName: 'td:nth-child(2)',
        email: 'td:nth-child(2) a',
    }
}
