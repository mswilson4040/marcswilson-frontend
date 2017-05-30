import { Component, OnInit } from '@angular/core';
import {BeerTrackerService} from '../pages/portfolio/beer-tracker/services/beer-tracker.service';
import {UIService} from '../shared-services/ui.service';
import {MlbStatsService} from '../pages/portfolio/mlb-stats/services/mlb-stats.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  providers: [BeerTrackerService, UIService, MlbStatsService]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
