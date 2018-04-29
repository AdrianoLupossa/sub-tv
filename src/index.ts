interface IApiMove {
  l: string;
  id: string;
  y: number;
}

interface IApiResponse {
  v: number;
  q: string;
  d: IApiMove[];
}

interface IFormattedMove {
  id: string;
  title: string;
  year: number;
}

// 1. The user will type the name
const name = 'game';
// 2. The CLI will get this name and request to IMDB API
import fetch from 'node-fetch';
const URL = `https://v2.sg.media-imdb.com/suggests/titles/${name.charAt(0)}/${name}.json`;

// 3. Handle the response from the API
const handleAPIResponse = (apiData: string): IApiResponse => {
  const finalData = apiData.substr(10, apiData.length - 3).replace(/\)/gi, '');
  return JSON.parse(finalData);
};

// 4. Filter only useful data

const filterApiObject = (apiObject: IApiResponse): IFormattedMove[] => {
  const list = apiObject.d;
  const finalList = list.map((apiMove: IApiMove): IFormattedMove => ({
    id: apiMove.id,
    title: apiMove.l,
    year: apiMove.y,
  }));

  return finalList;
};

fetch(URL)
  .then((res: any) => res.text())
  .then((data: string) => {
    return handleAPIResponse(data);
  })
  .then((apiJson: IApiResponse) => {
    return filterApiObject(apiJson);
  })
  .then(console.log)
  .catch(console.error);

// 5. Use IMDB Id selected by user and request full page to get the seasons
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

fetch('https://www.imdb.com/title/tt0944947/?ref_=fn_al_tt_4')
  .then((res: any) => {
    return res.text();

    //console.log(dom.window.document.querySelector('h1'));
  })
  .then(dom => {
    const domzito = new JSDOM(dom);
    console.log(
      domzito.window.document.querySelectorAll('.seasons-and-year-nav div:nth-child(4) a').length,
    );
  });

// 6. get language
const LANG = 'eng';

// 7. get the number of seasons, lang and imdb id and request to opensubtitle

import OS from 'opensubtitles-api';
const OpenSubtitles = new OS({
  useragent: 'TemporaryUserAgent',
  ssl: true,
});

OpenSubtitles.search({
  imdbid: 'tt0944947',
  season: 8,
}).then(console.log);
