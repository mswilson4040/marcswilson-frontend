import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ballpark} from '../classes/ballpark';
import {MlbStatsService} from '../services/mlb-stats.service';
import {UIService} from '../../../../shared-services/ui.service';

@Component({
  selector: 'app-mlbballparks',
  templateUrl: './mlbballparks.component.html',
  styleUrls: ['./mlbballparks.component.scss']
})
export class MLBBallparksComponent implements OnInit, OnDestroy {

  public ballparks: Array<Ballpark> = new Array<Ballpark>();
  constructor(private _mlbstatsService: MlbStatsService, private _uiService: UIService) {
    this._uiService.showOverlay('Fetching ballparks...');
    this._mlbstatsService.getAllBallparks().then(parks => {
      this.ballparks = parks.map( (p) => {
        return new Ballpark(p);
      });
      this._uiService.hideOverlay();
    });
  }
  ngOnInit(): void {
    $('#mlbsstatsBallparksContainer').fadeIn();
  }
  ngOnDestroy(): void {

  }
}
