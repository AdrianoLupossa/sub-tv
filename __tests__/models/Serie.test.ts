import { URL } from 'url'
import Configuration from '../../ts/config/config'
import { Serie } from '../../ts/models/index'

describe('Serie Class', () => {
  const label = 'Game of Silence 2016'
  const value = 'game-of-silence'
  const serie = new Serie(label, value)

  test('should return correct name', () => {
    expect(serie.label).toBe(label)
  })
  test('should return correct name from value', () => {
    expect(serie.value).toBe(value)
  })

  test('Should return the same URL', () => {
    const expectedURL = new URL(
      value,
      Configuration.providersList[0].href + 'tv/',
    )
    expect(serie.link.href).toEqual(expectedURL.href)
  })
})
