import { Component, OnInit } from '@angular/core';
import {Link} from '../../shared-classes/link';
import {Router} from '@angular/router';
import {ContactFormDialogComponent} from '../contact-form-dialog/contact-form-dialog.component';
import {MdDialog} from '@angular/material';
import {EmailService} from '../../shared-services/email.service';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  public links: Array<Link> = new Array<Link>();
  constructor(private _router: Router, private _dialog: MdDialog, private _emailService: EmailService) {
    this.links.push(new Link('/home', 'Home', 'fa-home'));
    this.links.push(new Link('/about', 'About', 'fa-user'));
    this.links.push(new Link('/portfolio', 'Portfolio', 'fa-briefcase'));

    this._router.events.subscribe((data) => {
      $('.navbar-collapse').removeClass('show'); // collapses nav if expanded
      const path = data['url'];
      if (path === '/' || path === '/home') {
        this.fadeNavColors('white', 'transparent');
      } else if (path === '/about') {
        this.fadeNavColors('black', 'transparent');
      } else if (path === '/portfolio') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/contact') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/mlbstats') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/mlbstatsapi') {
        this.fadeNavColors('white', 'transparent');
      } else if (path === '/powerball') {
        this.fadeNavColors('white', '#2F4050');
      } else if (path === '/timetracker') {
        this.fadeNavColors('white', '#2F4050');
      }
      $('.nav-collapsable').hide('slide', {direction: 'up'}, 200);
    });
  }

  fadeNavColors(textColor: string, backgroundColor: string): void {
    const textColorJqEl = $('#globalNav').find('a,.navbar-text');
    const backgroundColorJqEl = $('#globalNav');
    textColorJqEl.animate({color: textColor}, 200);
    backgroundColorJqEl.animate({'background-color': backgroundColor}, 200);
  }

  ngOnInit() {
  }
  openContactForm(): void {
    const dialogRef = this._dialog.open(ContactFormDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      data = data === 'true' ? true : false;
      if (data === true) {
        const componentInstance = dialogRef.componentInstance;
        const subject = componentInstance.subject;
        const from = componentInstance.from;
        const message = componentInstance.message;
        this._emailService.sendEmail(from, subject, message).then( result => {
          if (result.ok === true) {
            // show verification screen
          }
        }, error => {
          // display error
        });
      }
    });
  }

}
