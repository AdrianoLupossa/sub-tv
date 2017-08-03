import { URL } from 'url'
import { searchSeason } from '../../services/Season'

describe('Season Services', () => {
  test('Should return html string', async () => {
    const htmlString = await searchSeason(new URL('https://google.com/'))
    const validate = /<\/?html.*?>/g.test(htmlString)

    expect(validate).toBeTruthy()
  })
})
