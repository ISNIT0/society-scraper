import { SocietyData, SocietyScraper } from "./SocietyScraper";
import { resolve } from "url";

export function postProcessData(scraper: SocietyScraper, data: SocietyData): SocietyData {
    return Object.entries<string>(data)
        .reduce((acc, [key, value]) => {
            let val = value.trim();
            if ((val || '').startsWith('/')) {
                val = resolve(scraper.entryUrl, val);
            }

            return {
                [key.trim()]: value,
                ...acc,
            };
        }, {});
}