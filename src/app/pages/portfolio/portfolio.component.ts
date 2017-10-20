import { Component, OnInit } from '@angular/core';
import { App } from '../../shared-classes/app';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public apps: Array<App> = new Array<App>();
  constructor() {
    this.apps.push(new App('MLB Stats API', 'REST API for MLB Stats...', 'images/cruzswing.jpg', '/mlbstatsapi'));
    this.apps.push(new App('MLB Stats', 'In Progress...', 'images/handshakes.jpg', '/mlbstats'));
    this.apps.push(new App('Powerball', 'In Progress...', 'images/blue-angels.jpg', '/powerball'));
  }

  ngOnInit() {
  }

}
