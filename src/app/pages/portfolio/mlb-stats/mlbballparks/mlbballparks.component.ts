import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ballpark} from '../classes/ballpark';
import {MlbStatsService} from '../services/mlb-stats.service';

@Component({
  selector: 'app-mlbballparks',
  templateUrl: './mlbballparks.component.html',
  styleUrls: ['./mlbballparks.component.css']
})
export class MLBBallparksComponent implements OnInit, OnDestroy {

  public ballparks: Array<Ballpark> = new Array<Ballpark>();
  constructor(private mlbstatsService: MlbStatsService) {
    this.mlbstatsService.getAllBallparks().then(parks => {
      this.ballparks = parks.map( (p) => {
        return new Ballpark(p);
      });
    });
  }
  ngOnInit(): void {
    $('#mlbsstatsBallparksContainer').fadeIn();
  }
  ngOnDestroy(): void {

  }
}
