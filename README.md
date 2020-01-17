# Live Score

A Simple Scrape Method to Fetch the Live Cricket Score from espncricinfo.com

## For Education Purpose only ✍

> We are not Responsible for any future damage use at your own risk.if you want to use this on Production Read the ESPNcricinfo Terms and use.

## Methods Used

- Cheerio.js for scrape the content
- axios - HTTP Client
- Bundle the Package using browserify.JS

## usage

- Download and Upload the `public` Folder on your server or localhost

> Still Many Features are Missing I will Updating one by one based on user Suggestion -  if you have any ideas your PR's are always welcome.

## Development

- Clone this respo and install the Modules via yarn

```bash
yarn
```

- All changes and Updates are done via `main.js` file
- Front-end File on `public` Folder `index.html`
- Get Live Match Score URLS from `espncricinfo.com` XML Feed - `http://static.cricinfo.com/rss/livescores.xml`
- After the changes Generate bundle file

```bash
yarn build
```

- Test the site on local server

```bash
yarn live
```

## LICENSE

MIT
