import { Component, OnInit } from '@angular/core';
import {BeerMenu} from './classes/beer-menu';
import {BeerMenuCollection} from './classes/beer-menu-collection';
import {BeerTrackerService} from './services/beer-tracker.service';
import {UIService} from '../../../shared-services/ui.service';

@Component({
  selector: 'app-beer-tracker',
  templateUrl: './beer-tracker.component.html',
  styleUrls: ['./beer-tracker.component.css']
})
export class BeerTrackerComponent implements OnInit {
  public beerMenuCollection: BeerMenuCollection;
  public activeMenu: BeerMenu = new BeerMenu();
  public beerTypes: Array<string> = new Array<string>();
  constructor(private uiService: UIService, private beerTrackerService: BeerTrackerService) {

    this.beerTrackerService.activeMenu$.subscribe(activeMenu => {
      this.activeMenu = activeMenu;
    });
    this.beerTrackerService.beerMenuCollection$.subscribe(bmc => {
      this.beerMenuCollection = bmc;
      if (this.activeMenu.name !== '') {
        this.activeMenu = this.beerMenuCollection.menus.filter(menu => {
          return menu.name === this.activeMenu.name;
        })[ 0 ];
      }
      setTimeout(() => {this.fadeInBeerCards()}, 500);
    });

  }

  ngOnInit(): void {
    this.fetchBeerMenu('10153584464812091');
  }
  fetchBeerMenu(id: string): void {
    this.uiService.showOverlay('Fetching Beer Menu...');
    this.beerTrackerService.buildBeerMenuCollection(id).then(beerMenuCollection => {
        this.uiService.hideOverlay();
        this.beerMenuCollection = beerMenuCollection;
        this.activeMenu = this.beerMenuCollection.menus[1];
        this.beerTypes = this.getBeerTypesFromMenu(this.activeMenu);
        this.beerTrackerService.beerMenuCollection = this.beerMenuCollection;
        setTimeout(() => {this.fadeInBeerCards()}, 500);
      },
      error => {
        alert('error');
      });
  }
  searchBeerMenu(evt: any): void {

    const term = $(evt.currentTarget).val().toLowerCase();
    const searchMenu = this.getMenuByName(this.activeMenu.name);
    const newBeerMenu = new BeerMenu();

    newBeerMenu.name = searchMenu.name;
    newBeerMenu.icon = searchMenu.icon;
    newBeerMenu.beers = searchMenu.beers;
    if (term && term !== '') {
      newBeerMenu.beers = searchMenu.beers.filter(beer => {
        return beer.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
      this.beerTrackerService.setActiveMenu(newBeerMenu);
    } else {
      this.beerTrackerService.setActiveMenu(searchMenu);
    }

    // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
    setTimeout(() => {
      $('.beer-card-container').show();
    });
  }
  filterBeerMenu(type: string) {
    const filterMenu = this.getMenuByName(this.activeMenu.name);
    const newBeerMenu = new BeerMenu();

    newBeerMenu.name = filterMenu.name;
    newBeerMenu.icon = filterMenu.icon;
    newBeerMenu.beers = filterMenu.beers;
    if (type && type !== 'Clear Filter') {
      newBeerMenu.beers = filterMenu.beers.filter(beer => {
        return beer.type.toLowerCase() === type.toLowerCase();
      });
      this.beerTrackerService.setActiveMenu(newBeerMenu);
    } else {
      this.beerTrackerService.setActiveMenu(filterMenu);
    }
    // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
    setTimeout(() => {
      $('.beer-card-container').show();
    });
  }
  sortBeerMenuByBeerName(evt: any, order: string): void {
    $(evt.currentTarget).parent().find('.button-active').removeClass('button-active');
    $(evt.currentTarget).addClass('button-active');
    this.activeMenu.beers = this.activeMenu.beers.sort((a, b) => {
      if (order === 'asc') {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
      return 0;
    });
    // TODO: Shouldn't have to do a setTimeout here. display: none is conflicting with display
    setTimeout(() => {
      $('.beer-card-container').show();
    });
  }
  switchBeerMenu(beerMenu: BeerMenu) {
    $('.button-active').removeClass('button-active');
    this.beerTrackerService.setActiveMenu(beerMenu);
    this.beerTypes = this.getBeerTypesFromMenu(beerMenu);
    setTimeout(() => {this.fadeInBeerCards()}, 500);
  }
  fadeInBeerCards(): void {
    const beerCardInner = $('.beer-card-container');
    let delay = 100;
    $(beerCardInner).each((index, item) => {
      $(item).delay(delay).fadeIn('slow');
      delay += 150;
    });
  }
  getMenuByName(name: string): BeerMenu {
    return this.beerMenuCollection.menus.filter(menu => {
      return menu.name === name;
    })[0];
  }
  getBeerTypesFromMenu(beerMenu: BeerMenu): Array<string> {
    const ret = ['Clear Filter'];
    for (let i = 0; i < beerMenu.beers.length; i++) {
      const type = beerMenu.beers[i].type;
      if (ret.indexOf(type) === -1) {
        ret.push(type);
      }
    }

    return ret;
  }

}
