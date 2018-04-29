"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. The user will type the name
var name = 'game';
// 2. The CLI will get this name and request to IMDB API
var node_fetch_1 = __importDefault(require("node-fetch"));
var URL = "https://v2.sg.media-imdb.com/suggests/titles/" + name.charAt(0) + "/" + name + ".json";
// 3. Handle the response from the API
var handleAPIResponse = function (apiData) {
    var finalData = apiData.substr(10, apiData.length - 3).replace(/\)/gi, '');
    return JSON.parse(finalData);
};
// 4. Filter only useful data
var filterApiObject = function (apiObject) {
    var list = apiObject.d;
    var finalList = list.map(function (apiMove) { return ({
        id: apiMove.id,
        title: apiMove.l,
        year: apiMove.y,
    }); });
    return finalList;
};
node_fetch_1.default(URL)
    .then(function (res) { return res.text(); })
    .then(function (data) {
    return handleAPIResponse(data);
})
    .then(function (apiJson) {
    return filterApiObject(apiJson);
})
    .then(console.log)
    .catch(console.error);
// 5. Use IMDB Id selected by user and request full page to get the seasons
var jsdom_1 = __importDefault(require("jsdom"));
var JSDOM = jsdom_1.default.JSDOM;
node_fetch_1.default('https://www.imdb.com/title/tt0944947/?ref_=fn_al_tt_4')
    .then(function (res) {
    return res.text();
    //console.log(dom.window.document.querySelector('h1'));
})
    .then(function (dom) {
    var domzito = new JSDOM(dom);
    console.log(domzito.window.document.querySelectorAll('.seasons-and-year-nav div:nth-child(4) a').length);
});
// 6. get language
var LANG = 'eng';
// 7. get the number of seasons, lang and imdb id and request to opensubtitle
var opensubtitles_api_1 = __importDefault(require("opensubtitles-api"));
var OpenSubtitles = new opensubtitles_api_1.default({
    useragent: 'TemporaryUserAgent',
    ssl: true,
});
OpenSubtitles.search({
    imdbid: 'tt0944947',
    season: 8,
}).then(console.log);
