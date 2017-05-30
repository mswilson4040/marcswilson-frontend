import {Beer} from './beer';
import {BeerInformation} from './beer-information';
export class BeerMenu {
  public name: string;
  public icon: string;
  public beers: Array<Beer> = new Array<Beer>();

  constructor(_name?: string, _menuObj?: Array<Object>, completedMenu?: BeerMenu, icon?: string, untappdReferences?: Array<Object>) {
    const emptyMenu = this.isEmptyMenu(_name, _menuObj);

    if (emptyMenu === true) {
      this.name = '';
      this.beers = [];
      this.icon = '';
    } else {
      this.name = _name;
      this.icon = icon;
      const menuLength = typeof _menuObj !== 'undefined' ? _menuObj.length : 0;
      for (let i = 0; i < menuLength; i++) {
        const beer = _menuObj[i];
        this.addBeer(beer['Beer'], beer['Type'], completedMenu, untappdReferences);
      }
    }
  }

  isEmptyMenu(name: string, menuObj: Array<Object>): boolean {
    if (typeof name === 'undefined' && typeof menuObj === 'undefined') {
      return true;
    } else {
      return false;
    }
  }

  addBeer(beerName: string, beerType: string, completedMenu: BeerMenu, untappdReferences: Array<Object>) {
    const isCompleted = this.name === 'Completed Beers' ? true : this.isBeerCompleted(beerName, completedMenu);
    let referencedData = untappdReferences.filter(item => {
      return item['name'] === beerName;
    })[0];
    if (typeof referencedData !== 'undefined') {
      referencedData = {
        hasInfo: false,
        beer: {
          beer_label: referencedData['label'],
          rating_score: referencedData['rating'],
          bid: referencedData['bid']
        }
      };
    }
    this.beers.push(new Beer(beerName, beerType, new BeerInformation(referencedData), isCompleted));
  }

  isBeerCompleted(name: string, completedMenu: BeerMenu): boolean {
    if (typeof completedMenu === 'undefined') {
      return true;
    } else {
      const match = completedMenu.beers.filter(beer => {
        return beer.name === name;
      })[0];
      if (typeof match === 'undefined') {
        return false;
      } else {
        return true;
      }
    }
  }
}
