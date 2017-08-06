import { Component, OnInit } from '@angular/core';
import {UIService} from '../shared-services/ui.service';
import {MlbStatsService} from '../pages/portfolio/mlb-stats/services/mlb-stats.service';
import 'jquery';
import 'jqueryui';
import 'select2';
import 'bootstrap';
import 'hammerjs';
import {PowerballService} from '../pages/portfolio/powerball/services/powerball.service';
import {AuthService} from '../shared-services/auth.service';
import {EmailService} from '../shared-services/email.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [
    UIService,
    MlbStatsService,
    PowerballService,
    AuthService,
    EmailService
  ]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.location.href.indexOf('localhost') === -1) {
      $('#mediaHelper').remove();
    }

  }

}
