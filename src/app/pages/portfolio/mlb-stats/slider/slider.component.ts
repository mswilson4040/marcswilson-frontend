import { Component, OnInit } from '@angular/core';
import {MlbStatsService} from '../services/mlb-stats.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  private years: Array<any>;
  public selectedYear = 1871;

  constructor(private mlbStatsService: MlbStatsService) {

  }

  ngOnInit(): void {
    this.mlbStatsService.getDistinctYears().then(years => {
      this.years = years;
      $('#dot').draggable({
        axis: 'x',
        containment: 'parent',
        drag: (evt, ui) => {this.handleDrag(evt, ui);}
      });
      this.setHandle(this.selectedYear);
    });
  }
  handleDrag(evt, ui): void {
    const maxWidth = $('#line').width() - 15;
    let position = $('#dot').css('left');
    position = position.replace('px', '');
    const percent = (+position / +maxWidth) * 100;
    const index = Math.round((percent / 100) * (this.years.length - 1));
    this.selectedYear = this.years[index];
  }
  handleDrop(): void {
    this.mlbStatsService.selectedYear = this.selectedYear;
  }
  setHandle(year) {
    const index = this.years.indexOf(year);
    const percent = (index / this.years.length) * 100;
    $('#dot').css('left', percent + '%');
  }

}
