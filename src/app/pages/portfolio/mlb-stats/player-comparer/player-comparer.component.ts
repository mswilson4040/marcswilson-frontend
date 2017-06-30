import { Component, OnInit } from '@angular/core';
import {MlbStatsService} from '../services/mlb-stats.service';
import {Appearance} from '../classes/appearance';
declare const Highcharts: any;

@Component({
  selector: 'app-player-comparer',
  templateUrl: './player-comparer.component.html',
  styleUrls: ['./player-comparer.component.css']
})
export class PlayerComparerComponent implements OnInit {

  public firstAppearances: Array<Appearance> = new Array<Appearance>();
  public secondAppearances: Array<Appearance> = new Array<Appearance>();
  constructor(private _mlbStatsService: MlbStatsService) { }

  ngOnInit() {

  }
  drawChart(player1: Array<Appearance>, player2: Array<Appearance>): void {
    Highcharts.chart('compareChart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Population pyramid for Germany, 2015'
      },
      subtitle: {
        text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
      },
      xAxis: [{
        categories: [],
        reversed: false,
        labels: {
          step: 1
        }
      }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: [],
        linkedTo: 0,
        labels: {
          step: 1
        }
      }],
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return Math.abs(this.value);
          }
        }
      },

      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },

      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
            'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
        }
      },

      series: [{
        name: 'Male',
        data: [-20.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
          -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
          -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
      }, {
        name: 'Female',
        data: [20.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
          3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
          1.8, 1.2, 0.6, 0.1, 0.0]
      }]
    });
  }

}
