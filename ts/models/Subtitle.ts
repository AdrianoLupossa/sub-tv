import { URL } from 'url'
import Configuration from '../config/config'

export default class Subtitle {
  private _link: URL

  constructor(
    readonly rating: string,
    readonly language: string,
    readonly name: string,
    link: string,
  ) {
    this._link = new URL(
      link.replace('subtitles', 'subtitle') + '.zip',
      Configuration.providersList[0].href,
    )
  }

  get link() {
    return this._link
  }
}
