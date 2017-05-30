import {BeerMenu} from './beer-menu';
export class BeerMenuCollection {

  public menus: Array<BeerMenu> = new Array<BeerMenu>();

  constructor(_completedBeers?: any, _liveBeers?: any, _incompleteBeers?: any, _untappdReferences?: any) {
    _untappdReferences = typeof _untappdReferences === 'undefined' ? [] : _untappdReferences;
    if (typeof _completedBeers !== 'undefined' && typeof _liveBeers !== 'undefined') {
      this.addMenu(new BeerMenu('Completed Beers', _completedBeers, new BeerMenu(), 'fa-check', _untappdReferences));
      this.addMenu(new BeerMenu('Live Beers', _liveBeers, this.getMenuByName('Completed Beers'), 'fa-beer', _untappdReferences));
      this.addMenu(new BeerMenu('Incomplete Beers', _incompleteBeers, new BeerMenu(), 'fa-times', _untappdReferences));
    }
  }

  addMenu(beerMenu: BeerMenu): void {
    this.menus.push(beerMenu);
  }

  getMenuByName(name: string): BeerMenu {
    try {
      return this.menus.filter(menu => {
        return menu.name === name;
      })[0];
    } catch (ex) {
      return new BeerMenu();
    }

  }

}
