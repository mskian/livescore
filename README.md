# Live Score 🔔

![Uptime Robot status](https://img.shields.io/uptimerobot/status/m784277953-173703ec38dbb8847658812d) [![dependencies Status](https://david-dm.org/mskian/livescore/status.png)](https://david-dm.org/mskian/livescore) [![devDependencies Status](https://david-dm.org/mskian/livescore/dev-status.png)](https://david-dm.org/mskian/livescore?type=dev)  

> A Simple Scrape Method to Fetch the Live Cricket Score from espncricinfo.com

## For Education Purpose only ✍

> We are not Responsible for any future damage use at your own risk.if you want to use this on Production Read the ESPNcricinfo Terms and use.

## Methods Used ⚙

- Cheerio.js for scrape the content
- axios - HTTP Client
- Bundle the Package using browserify.JS
- Babel - Minify the Bundled JS
- Node `http-server` - Test the Site Locally

## CORS API 🍔

By default `espncricinfo` Blocking the Cross-origin Request so we use `https://cors-anywhere.herokuapp.com` to Bypass the CORS Blocking but `cors-anywhere Limited the Call request yes we can call only 200 request Hour (`200 Request for 1 Hour`) if you want More then Self-host the cors-anywhere API Script it's Open Source For More Refer here - <https://github.com/Rob--W/cors-anywhere#demo-server>

## To Do List 🔖

- [ ] JSON API
- [ ] Live Auto Refresh

## usage 📦

- Download and Upload the `public` Folder on your server or localhost

> Still Many Features are Missing I will Updating one by one based on user Suggestion -  if you have any ideas your PR's are always welcome.

## Development 🛠

- Clone this respo and install the Modules via yarn
  
```sh
git clone https://github.com/mskian/livescore.git
cd livescore
```

```sh
yarn
```

- All changes and Updates are done via `main.js` file
- Front-end File on `public` Folder `index.html`
- Get Live Match Score URLS from `espncricinfo.com` XML Feed - `http://static.cricinfo.com/rss/livescores.xml` - you need the Update Live Match URL - <https://github.com/mskian/livescore/blob/master/main.js#L4> Don't Remove the `https://cors-anywhere.herokuapp.com` it helps us to Bypass the Cors Blocking - <https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9>
- After the changes Generate bundle file

```sh
yarn build
```

- Test the site on local server

```sh
yarn live
```

## LICENSE ☑

MIT
