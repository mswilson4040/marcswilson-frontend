import { Component, OnInit } from '@angular/core';
import { PowerballService } from './services/powerball.service';
import { PowerballData } from './classes/powerball-data';
import {UIService} from '../../../shared-services/ui.service';
declare const Highcharts: any;

@Component({
  selector: 'app-powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.scss']
})
export class PowerballComponent implements OnInit {
  public powerballData: PowerballData = new PowerballData();
  public oneThroughSixtyNine: Array<number> = this.generateSixtyNine();
  constructor(private _powerballService: PowerballService, private _uiService: UIService) { }

  ngOnInit() {
    this._uiService.showOverlay('Fetching Powerball numbers...');
    this._powerballService.getPowerball().then(pb => {
      this.powerballData = pb;
      const data = this.powerballData.getHighchartsData();
      this.drawChart(data);
      this._uiService.hideOverlay();
    });
  }
  drawChart(data) {

    Highcharts.chart('powerballChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Power Number hit counts'
      },
      subtitle: {
        text: 'Powerball'
      },
      xAxis: {
        categories: this.generateSixtyNine(),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Times hit'
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: data
    });

  }
  generateSixtyNine(): Array<number> {
    const arr = [];
    for (let i = 0; i < 69; i++) {
      arr.push(i + 1);
    }
    return arr;
  }
}
