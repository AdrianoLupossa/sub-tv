import { URL } from 'url'
import { Subtitle } from '../../ts/models/index'

describe('Subtitle Class', () => {
  const dataTest = {
    absolutePath: new URL(
      'https://www.tv-subs.com/subtitle/24-legacy-season-1-episode-1-arabic-30151.zip',
    ),
    language: 'Arabic',
    link: '/subtitles/24-legacy-season-1-episode-1-arabic-30151',
    name: '24.Legacy.S01E01.HDTV.x264-FLEET',
    rating: '0',
  }

  const subtitle = new Subtitle(
    dataTest.rating,
    dataTest.language,
    dataTest.name,
    dataTest.link,
  )

  test('should return correct name', () => {
    expect(subtitle.name).toBe(dataTest.name)
  })
  test('should return correct language', () => {
    expect(subtitle.language).toBe(dataTest.language)
  })
  test('should return correct rating', () => {
    expect(subtitle.rating).toBe(dataTest.rating)
  })
  test('should return full URL changing "/subtitles/" to "/subtitle/" and with .zip', () => {
    expect(subtitle.link).toEqual(dataTest.absolutePath)
  })
})
