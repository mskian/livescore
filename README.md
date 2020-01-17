# Live Score

A Simple Scrape Method to Fetch the Live Score from espncricinfo.com

## For Education Purpose only ✍

> We are not Responsible for the any future damage use at your own Risk -if you want to use this on Production Read the ESPNcricinfo Terms and use.

## Methods Used

- Cheerio.js for scrape the content
- axios - HTTP Client
- Bundle the Package using browserify.JS `npm install -g browserify`

## usage

- Download and Upload the `public` Folder on your server or localhost

## Development

- Clone this respo and install the Modules via yarn

```bash
yarn
```

- all changes and Updates are done via `main.js` file
- After the changes Generate the bundle file

```bash
browserify main.js -o ./public/bundle.js
```

## LICENSE

MIT
