# Societies Scraper

## Running
```
npm i
npm start
```

## Adding a new scraper
1. Copy `./src/societies/sample.ts` to `./src/societies/SCRAPER.ts`
2. Add `export * from './SCRAPER';` to `./src/societies/index.ts`
3. Modify your new scraper file
4. Set `whitelist = false` when done

## Merging Changes
1. `git checkout -b KAI/NEWBRANCHNAME` e.g `git checkout -b KAI/StAndrews`
2. Commit changes = 
3. Push changes to Github `git push origin KAI/NEWBRANCHNAME` 
4. Create pull request on Github and request Joe
5. `git checkout master` & `git pull origin master`


# License
[./LICENSE](./LICENSE) - MIT