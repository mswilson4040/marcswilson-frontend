import { Component, OnInit } from '@angular/core';
import { select } from 'd3';
import { ChadwickService } from '../../shared-services/chadwick.service';

@Component({
  selector: 'app-mlbstats-explorer',
  templateUrl: './mlbstats-explorer.component.html',
  styleUrls: ['./mlbstats-explorer.component.scss'],
  providers: [ ChadwickService ]
})
export class MlbstatsExplorerComponent implements OnInit {
  public seasons: string[] = [];
  public selectedYear = '1956';
  constructor(private _chadwickService: ChadwickService) { }

  async ngOnInit() {
    const seasons = await this._chadwickService.getSeasons();
    this.seasons = seasons.reverse();
  }
  onSliderChange(e) {
    this.selectedYear = e.value;
  }

}
