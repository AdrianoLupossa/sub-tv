import path = require('path')
import { URL } from 'url'

export default abstract class Configuration {
  static get version(): string {
    const packageJsonPath = path.join(__dirname, '../../package.json')
    return require(packageJsonPath).version
  }
  static get providersList(): URL[] {
    return [new URL('https://www.tv-subs.com')]
  }
}
