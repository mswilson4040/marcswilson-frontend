import {AfterViewInit, Component, OnInit} from '@angular/core';
import {App} from '../../shared-classes/app';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  public apps: Array<App> = new Array<App>();
  constructor() {
    this.apps.push(new App('MLB Stats API', 'REST API for MLB Stats...', 'images/cruzswing.jpg', '/mlbstatsapi'));
    this.apps.push(new App('MLB Stats', 'In Progress...', 'images/handshakes.jpg', '/mlbstats'));
    this.apps.push(new App('Powerball', 'In Progress...', 'images/handshakes.jpg', '/powerball'));
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const containers = $('.app-container');
    let delay = 100;
    for (let i = 0; i < containers.length; i++) {
      $(containers[i]).delay(delay).fadeIn(700);
      delay += 100;
    }
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
