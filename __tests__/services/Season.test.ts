import { JSDOM } from 'jsdom'
import { URL } from 'url'
import { Season, Serie } from '../../ts/models/index'
import {
  _filterOtherSeason,
  _getDOMFromUrl,
  _mountSeasonFromLink,
  fetchSeasons,
} from '../../ts/services/index'

import {
  getArrayFromNodeList,
  getElementFromDOM,
} from '../../ts/helpers/utils/index'

describe('Season Services', async () => {
  describe('Test _getDOMFromUrl method', () => {
    test('Should return the a DOM element', async () => {
      const dom = await _getDOMFromUrl(
        'http://www.tv-subs.com/tv/the-walking-dead',
      )
      expect('window' in dom).toBeTruthy()
    })

    describe('Test _getDOMFromUrl method', () => {
      test('Should be instanceof Season', async () => {
        const dom = await _getDOMFromUrl(
          'http://www.tv-subs.com/tv/the-walking-dead',
        )

        const linkList = getArrayFromNodeList(
          getElementFromDOM(dom, '.season-list li a'),
        )

        expect(
          _mountSeasonFromLink(<HTMLLinkElement>linkList[0]),
        ).toBeInstanceOf(Season)
      })
    })

    describe('Test _filterOtherSeason method', () => {
      test('Should return array of seasons without "Other" season', () => {
        const seasons = [
          new Season('other', 'https://'),
          new Season('Season 1', 'https://'),
        ]
        const seasonsWithoutOther = Array.from(seasons)
        seasonsWithoutOther.shift()

        expect(_filterOtherSeason(seasons)).toEqual(seasonsWithoutOther)
      })
    })
  })

  describe('Test fetchSeasons method', () => {
    test('Should return a list of seasons', () => {
      const fakeData = [
        new Season(
          'Season 1',
          'https://www.tv-subs.com/tv/breaking-bad/season-1/',
        ),
        new Season(
          'Season 2',
          'https://www.tv-subs.com/tv/breaking-bad/season-2/',
        ),
        new Season(
          'Season 3',
          'https://www.tv-subs.com/tv/breaking-bad/season-3/',
        ),
        new Season(
          'Season 4',
          'https://www.tv-subs.com/tv/breaking-bad/season-4/',
        ),
        new Season(
          'Season 5',
          'https://www.tv-subs.com/tv/breaking-bad/season-5/',
        ),
      ]
      const callbackTest = (data: any) => {
        expect(data).toEqual(fakeData)
      }

      fetchSeasons(new Serie('Breaking Bad', 'breaking-bad'))
        .then(callbackTest)
        .catch(e => console.log(e))
    })
  })
})
