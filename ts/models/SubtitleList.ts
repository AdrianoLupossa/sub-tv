import * as _ from 'lodash'

import Subtitle from '../models/Subtitle'

export default class SubtitleList {
  private _listOfSubtitles: Subtitle[] = []
  private _listOfSubtitlesByLanguage: Dictionary<Subtitle[]> = []

  get all(): Subtitle[] {
    return this._listOfSubtitles
  }
  set add(subtitle: Subtitle) {
    this._listOfSubtitles.push(subtitle)
    this._sortByLanguage()
  }

  get languagesAvailable() {
    return _.reduce(
      this._listOfSubtitlesByLanguage,
      (result, value, key) => {
        return result.concat(key)
      },
      [],
    )
  }

  private _sortByLanguage() {
    this._listOfSubtitlesByLanguage = _.groupBy(
      this._listOfSubtitles,
      'language',
    )
  }

  protected getByLanguage(language) {
    return [].concat(this._listOfSubtitlesByLanguage[language])
  }
}

module.exports = SubtitleList
