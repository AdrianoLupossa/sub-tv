import { URL } from 'url'
import Configuration from '../../ts/config/config'
import { Episode } from '../../ts/models/Episode'

describe('Episode Class', () => {
  const name = 'Episode 1'
  const link = '/tv/game-of-thrones/season-1/episode-1/'

  const episode = new Episode(name, link)

  test('should return correct name', () => {
    expect(episode.name).toBe(name)
  })
  test('should return full URL', () => {
    const expectUrl = new URL(link, Configuration.providersList[0].href)

    expect(episode.link).toEqual(expectUrl)
  })
})
