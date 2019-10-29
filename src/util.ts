import { SocietyData, SocietyScraper } from "./SocietyScraper";
import { resolve } from "url";
import tagMappings from './tagMappings.json';

export function postProcessData(scraper: SocietyScraper, data: SocietyData): SocietyData {
    return Object.entries<string>(data)
        .reduce((acc, [key, value]) => {
            if (typeof value === 'string') {
                let val = value.trim();
                if ((val || '').startsWith('/')) {
                    val = resolve(scraper.entryUrl, val);
                }
            }

            return {
                [key.trim()]: value,
                ...acc,
            };
        }, {});
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const tags = Object.keys(tagMappings);
export function getTags(_text: string) {
    const text = _text.toLocaleLowerCase().replace(/[^A-z0-9]/g, '');
    const applicableTags = tags.filter((t) => {
        const tagKeys = (tagMappings as any)[t];
        return tagKeys.some((tk: string) => text.includes(tk));
    });
    return applicableTags;
}