import path = require('path')
import { URL } from 'url'

import Configuration from '../../ts/config/config'

describe('Configuration FIle', () => {
  test('Should return version from Package Json', () => {
    const packageJsonPath = path.join(__dirname, '../../package.json')
    const versionFromPackage = require(packageJsonPath).version

    expect(Configuration.version).toEqual(versionFromPackage)
  })
  test('Should return the actual provider', () => {
    expect(Configuration.providersList).toEqual([
      new URL('https://www.tv-subs.com'),
    ])
  })
})
