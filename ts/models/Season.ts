import { URL } from 'url'
import Configuration from '../config/config'

export class Season {
  private _link: string

  constructor(readonly name: string, link: string) {
    this._link = link
  }

  get link(): URL {
    return new URL(this._link, Configuration.providersList[0])
  }
}
