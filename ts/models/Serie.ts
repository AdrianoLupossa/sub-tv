import { URL } from 'url'
import Configuration from '../config/config'

export class Serie {
  private _link: URL
  constructor(readonly label: string, readonly value: string) {
    this._link = new URL('/tv/' + value, Configuration.providersList[0].href)
  }

  get link() {
    return this._link
  }
}
