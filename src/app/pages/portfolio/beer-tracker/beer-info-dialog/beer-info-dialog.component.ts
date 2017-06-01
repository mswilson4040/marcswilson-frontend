import { Component, OnInit } from '@angular/core';
import { Beer } from '../classes/beer';
import { BeerTrackerService } from '../services/beer-tracker.service';
import { UIService } from '../../../../shared-services/ui.service';
import { BeerInformation } from '../classes/beer-information';

@Component({
  selector: 'app-beer-info-dialog',
  templateUrl: './beer-info-dialog.component.html',
  styleUrls: ['./beer-info-dialog.component.css']
})
export class BeerInfoDialogComponent implements OnInit {
  public beer: Beer = new Beer();
  private searchResults: Object = {results: [], activePage: 0};
  private readMoreExpanded = false;
  private searchResultExpanded = false;

  constructor(public beerTrackerService: BeerTrackerService, private uiService: UIService) {
    this.beerTrackerService.beerInfo$.subscribe(beer => {
      this.beer = beer;
      this.showDialog(beer);
    });
  }
  ngOnInit() {
  }
  showDialog(info: Beer): void {
    this.uiService.showOverlay('Querying Untappd...');
    this.readMoreExpanded = false;
    this.searchResults = {results: [], activePage: 0};
    this.searchResultExpanded = false;
    if (typeof info['info']['bid'] !== 'undefined') {
      this.beerTrackerService.getUntappdInfoByBID(info['info']['bid'], info).then(bi => {
        this.uiService.hideOverlay();
        $('#dlgBeerInfo').modal('show');
      });
    } else {
      this.uiService.hideOverlay();
      $('#dlgBeerInfo').modal('show');
    }
  }
  showFullDetails(evt: any): void {
    this.readMoreExpanded = true;

  }
  getUntappdInfo(beer: Beer): void {
    this.uiService.showOverlay('Querying Untappd...');
    this.beerTrackerService.getUntappdInfo(beer).then(info => {
      const results = info['response']['beers']['items'];
      const pages = [];
      let page = [];

      for (let i = 0; i < results.length; i++) {
        results[i].beer.brewery = results[i].brewery;
        const item = new Beer(results[i].beer.beer_name, beer.type, new BeerInformation(results[i]), beer.completed);
        page.push(item);
        if (page.length === 3 || i === results.length - 1) {
          pages.push(page);
          page = [];
        }
      }
      this.searchResults = {results: pages, activePage: 0};
      console.log(this.searchResults);
      this.uiService.hideOverlay();
    });
  }
  nextPage(): void {
    const pageNum = this.searchResults['activePage'];

    if (pageNum + 1 < this.searchResults['results'].length) {
      this.searchResults['activePage'] = pageNum + 1;
    }
  }
  previousPage(): void {
    const pageNum = this.searchResults['activePage'];
    if (pageNum > 0) {
      this.searchResults['activePage'] = pageNum - 1;
    }
  }
  toggleResult(evt: any) {
    $(evt.currentTarget).toggleClass('rotate-180');
    const cardBlock = $(evt.currentTarget).closest('.card').find('.card-block');
    cardBlock.toggle('slide', {direction: 'up'}, 300);
  }
  addUntappdInfo(beer: Beer, info: BeerInformation): void {
    this.uiService.showOverlay('Add beer information to ' + beer.name);
    const bid = info['bid'];
    this.beerTrackerService.getUntappdInfoByBID(bid, beer).then(bi => {
      this.uiService.hideOverlay();
    });

  }

}
