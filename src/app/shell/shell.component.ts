import { Component, OnInit } from '@angular/core';
import {UIService} from '../shared-services/ui.service';
import {MlbStatsService} from '../pages/portfolio/mlb-stats/services/mlb-stats.service';
import 'jquery';
import 'jqueryui';
import 'select2';
import 'bootstrap';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  providers: [UIService, MlbStatsService]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
