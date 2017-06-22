import { Component, OnInit } from '@angular/core';
import {PowerballService} from './services/powerball.service';
import {Powerball} from './classes/powerball';
declare const Highcharts: any;

@Component({
  selector: 'app-powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.css']
})
export class PowerballComponent implements OnInit {
  public powerball: Array<Powerball> = new Array<Powerball>();
  constructor(private _powerballService: PowerballService) { }

  ngOnInit() {
    this._powerballService.getPowerball().then(pb => {
      this.powerball = pb;
      const data = this.buildData(this.powerball);
      this.drawChart(data);
    });
  }
  buildData(data) {
    // [number, hits]
    const hash = {};
    for (let i = 0; i < data.length; i++) {
      const pb = data[ i ];
      const first = pb.first;
      const second = pb.second;
      const third = pb.third;
      const fourth = pb.fourth;
      const fifth = pb.fifth;
      const powerball = pb.powerball;
      if (hash.hasOwnProperty(first)) {
        hash[ first ] += 1;
      } else {
        hash[ first ] = 1;
      }
      if (hash.hasOwnProperty(second)) {
        hash[ second ] += 1;
      } else {
        hash[ second ] = 1;
      }
      if (hash.hasOwnProperty(third)) {
        hash[ third ] += 1;
      } else {
        hash[ third ] = 1;
      }
      if (hash.hasOwnProperty(fourth)) {
        hash[ fourth ] += 1;
      } else {
        hash[ fourth ] = 1;
      }
      if (hash.hasOwnProperty(fifth)) {
        hash[ fifth ] += 1;
      } else {
        hash[ fifth ] = 1;
      }
      if (hash.hasOwnProperty(powerball)) {
        hash[ powerball ] += 1;
      } else {
        hash[ powerball ] = 1;
      }
    }
    const arr = [];
    for (const obj in hash) {
      if (hash.hasOwnProperty(obj)) {
        arr.push([ obj.toString(), hash[ obj ] ]);
      }
    }
    return arr;
  }
  drawChart(data) {
    Highcharts.chart('powerballChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Drawn numbers'
      },
      subtitle: {
        text: '',
        useHTML: true
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Game Wins'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Times drawn : <b>{point.y}</b>'
      },
      series: [ {
        name: 'Game Wins',
        data: data,
        dataLabels: {
          enabled: false,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '10px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      } ]
    });
  }
}
