import { URL } from 'url'
import Configuration from '../../ts/config/config'
import { Season } from '../../ts/models/index'

describe('Season Class', () => {
  const name = 'Season 1'
  const link = '/tv/game-of-silence/season-1/'
  const season = new Season(name, link)

  test('should return correct name', () => {
    expect(season.name).toBe(name)
  })
  test('should return full URL', () => {
    expect(season.link).toEqual(new URL(link, Configuration.providersList[0]))
  })
})
