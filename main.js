const axios = require('axios');
const cheerio = require('cheerio');

const liveurl = 'https://cors-anywhere.herokuapp.com/https://www.espncricinfo.com/series/8048/game/1216492/mumbai-indians-vs-chennai-super-kings-1st-match-indian-premier-league-2020-21';

// eslint-disable-next-line no-undef
const appNotice = $('.notice');
appNotice.html('<p class="has-text-centered">Fetching the Live Score 📦</p>');

axios({
    method: 'get',
    url: liveurl,
})
    .then(
        setTimeout(() => {
            appNotice.empty();
        }, 800),
    )
    .then(function(response) {
        if (response.status == '200') {
            const html = response.data;
            const $ = cheerio.load(html);
            let score = $('meta[property="og:title"]').attr('content');
            console.log(score);
            document.getElementById('response').innerHTML = '<div class="notification score is-link has-text-weight-bold">' + score + '</div>';
        } else {
            console.log(response.status);
        }
    })
    .catch(function(error) {
        if (!error.response) {
            console.log('Enter a Valid URL');
        } else if (error.response.status == 429) {
            console.log(error.response.data);
            document.getElementById('response').innerHTML = '<div class="notification is-danger">'+ error.response.data +'</div>';
        } else if (error.response.status == 403) {
            console.log(error.response.data);
            document.getElementById('response').innerHTML = '<div class="notification is-danger">'+ error.response.data +'</div>';
        } else {
            console.log('Hmm Something Went Wrong or HTTP Status Code is Missing');
        }
    });
