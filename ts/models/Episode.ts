import { URL } from 'url'
import Configuration from '../config/config'

export default class Episode {
  private _link: URL

  constructor(readonly name: string, link: string) {
    this._link = new URL(link, Configuration.providersList[0])
  }

  get link(){
    return this._link
  }
}
