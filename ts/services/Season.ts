import * as inquirer from 'inquirer'
import { JSDOM } from 'jsdom'
import { URL } from 'url'
import { Season, Serie } from '../models/index'

import { getArrayFromNodeList, getElementFromDOM } from '../helpers/utils/index'

export const fetchSeasons = (serie: Serie) => {
  return new Promise((resolve, reject) => {
    _getDOMFromUrl(serie.link.href).then(dom => {
      try {
        const arrayOfLinks = getArrayFromNodeList(
          getElementFromDOM(dom, '.season-list li a'),
        )

        const arrayOfSeasons = _filterOtherSeason(
          arrayOfLinks.map((link: HTMLLinkElement) =>
            _mountSeasonFromLink(link),
          ),
        )

        resolve(arrayOfSeasons)
      } catch (error) {
        reject(error)
      }
    })
  })
}

export const _filterOtherSeason = (seasons: Season[]) =>
  seasons.filter(season => season.name.toUpperCase() !== 'OTHER')

export const _getDOMFromUrl = (url: string): Promise<JSDOM> =>
  JSDOM.fromURL(url)

export const _mountSeasonFromLink = (element: HTMLLinkElement) => {
  const name = element.textContent
  const link = element.href
  return new Season(<string>name, link)
}
/*
const seasonPrompt = listOfSeason => {
  const question = {
    choices: [],
    message: 'Choose the season',
    name: 'season',
    type: 'list',
    filter: function(answer) {
      return listOfSeason.find(season => season.name === answer)
    },
  }
  question.choices = listOfSeason.map(serie => serie.name)

  return inquirer.prompt(question)
}
 */
