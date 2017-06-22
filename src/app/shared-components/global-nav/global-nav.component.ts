import { Component, OnInit } from '@angular/core';
import {Link} from '../../shared-classes/link';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css']
})
export class GlobalNavComponent implements OnInit {
  public links: Array<Link> = new Array<Link>();
  constructor(private _router: Router) {
    this.links.push(new Link('/home', 'Home', 'fa-home'));
    this.links.push(new Link('/about', 'About', 'fa-user'));
    this.links.push(new Link('/portfolio', 'Portfolio', 'fa-briefcase'));

    this._router.events.subscribe((data) => {
      $('.navbar-collapse').removeClass('show'); // collapses nav if expanded
      const path = data['url'];
      if (path === '/' || path === '/home') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/about') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/portfolio') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/contact') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/mlbstats') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/mlbstatsapi') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/powerball') {
        this.fadeNavColors('white', '#2F4050');
      }
      $('.nav-collapsable').hide('slide', {direction: 'up'}, 200);
    });
  }

  fadeNavColors(textColor: string, backgroundColor: string): void {
    const textColorJqEl = $('#globalNav').find('a');
    const backgroundColorJqEl = $('#globalNav');
    textColorJqEl.animate({color: textColor}, 200);
    backgroundColorJqEl.animate({'background-color': backgroundColor}, 200);
  }

  ngOnInit() {
  }

}
