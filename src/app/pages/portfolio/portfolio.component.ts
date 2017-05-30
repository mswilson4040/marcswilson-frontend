import { Component, OnInit } from '@angular/core';
import {App} from '../../shared-classes/app';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public apps: Array<App> = new Array<App>();
  constructor() {
    this.apps.push(new App('Beer Tracker', 'Track progress to 160 beers at a local bar', '/images/th.jpg', '/beertracker'));
    this.apps.push(new App('MLB Stats API', 'REST API for MLB Stats...', 'images/cruzswing.jpg', '/mlbstatsapi'));
    this.apps.push(new App('MLB Stats', 'In Progress...', 'images/handshakes.jpg', '/mlbstats'));
  }

  ngOnInit() {
  }
  showHoverDisplay(evt): void {

    const container = $(evt.currentTarget);
    container.closest('.app-container').find('.app-footer').show('slide', {}, 300);
  }
  hideHoverDisplay(evt): void {

    const container = $(evt.currentTarget);
    container.closest('.app-container').find('.app-footer').hide();
  }

}
