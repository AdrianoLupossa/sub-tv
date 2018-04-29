const OS = require('opensubtitles-api');
const OpenSubtitles = new OS({
  useragent: 'TemporaryUserAgent',
  ssl: true,
});

OpenSubtitles.search({
  imdbid: 'tt0944947', // 'tt528809' is fine too.
}).then(console.log);
/*

OpenSubtitles.search({
  imdbid: 'tt0944947',
  limit: 'all',
  sublanguageid: 'eng',
})
  .then(console.log)
  .catch(console.log);
 */
/*
const axios = require('axios')
const URL = 'https://v2.sg.media-imdb.com/suggests/titles/g/game.json'

axios.get(URL)
  .then(res => res.data)
  .then(data => {
    const finalData = data.substr(10, data.length - 3).replace(/\)/gi, '')
    console.log(JSON.parse(finalData))
  })
 */
