const axios = require('axios');
const cheerio = require('cheerio');

const liveurl = 'https://cors-anywhere.herokuapp.com/https://www.espncricinfo.com/series/19430/game/1185306/south-africa-vs-england-3rd-test-icc-world-test-championship-2019-2021';

axios({
        method: 'get',
        url: liveurl,
    })
    .then(function(response) {
        if (response.status == '200') {
            const html = response.data;
            const $ = cheerio.load(html);
            let score = $('meta[name="title"]').attr('content');
            console.log(score);
            document.getElementById('response').innerHTML = '<div class="notification score is-link has-text-weight-bold">' + score + '</div>';
        } else {
            console.log(response.status);
        };
    })
    .catch(function(error) {
        if (!error.response) {
            console.log('Enter a Valid URL');
        } else {
            console.log(error.response.data);
        }
    });