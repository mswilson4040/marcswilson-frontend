export class BeerInformation {
  public hasInfo: boolean;
  constructor(info?: Object) {
    if (typeof info !== 'undefined') {
      this.hasInfo = info.hasOwnProperty('hasInfo') === true ? info['hasInfo'] : true;
      const bi = info['beer'];
      for (const obj in bi) {
        if (bi.hasOwnProperty(obj)) {
          this[obj] = bi[obj];
        }
      }
    } else {
      this.hasInfo = false;
      this['beer_label'] = 'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png';
      this['rating_score'] = 0;
    }
  }
}
