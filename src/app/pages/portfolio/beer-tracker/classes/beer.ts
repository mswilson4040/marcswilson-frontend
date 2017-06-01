import {BeerInformation} from './beer-information';
export class Beer {
  public name: string;
  public type: string;
  public info: BeerInformation;
  public completed: boolean;
  public beer_label = '';
  public rating_score = '';

  constructor(_name?: string, _type?: string, _info?: BeerInformation, _completed?: boolean) {
    if (typeof _name !== 'undefined' && typeof _type !== 'undefined' && typeof _info !== 'undefined' && typeof _completed !== 'undefined') {
      this.name = _name;
      this.type = _type;
      this.info = _info;
      this.completed = _completed;
    } else {
      this.name = '';
      this.type = '';
      this.info = new BeerInformation();
      this.completed = false;
    }
  }
}
