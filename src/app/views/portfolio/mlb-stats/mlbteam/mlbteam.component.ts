import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../classes/player';
import {Team} from '../classes/team';
import {MlbStatsService} from '../services/mlb-stats.service';
import {UIService} from '../../../../shared-services/ui.service';
declare const Highcharts: any; // TODO: Fix reference to proper ES6 syntax

@Component({
  selector: 'app-mlbteam',
  templateUrl: './mlbteam.component.html',
  styleUrls: ['./mlbteam.component.scss']
})
export class MLBTeamComponent implements OnInit, OnDestroy {

  public selectedTeam: Team = new Team();
  constructor(private _mlbStatsService: MlbStatsService, private _uiService: UIService) {
    this._mlbStatsService.selectedTeam$.subscribe(team => {
      if (team !== null) {
        this.selectedTeam = team;
        this._mlbStatsService.getTeamByYear(this._mlbStatsService.selectedYear, this.selectedTeam).then(t => {
          this.selectedTeam = t
          const data = this.buildChartData(null, 'HR');
          this.buildChart(data, 'HR');
        });
      }
    });
  }
  ngOnInit(): void {
    $('#teamStatsContainer').fadeIn();
  }
  ngOnDestroy(): void {
    $('#teamStatsContainer').fadeOut();
  }
  buildChartData(node, stat): Array<any> {

    const ret = this.selectedTeam.players.map( (p) => {
      if (node === null) {
        return [ p.personal[ 0 ].fullName, p.batting[ 0 ][ stat ] ];
      } else {
        const s = p[node][ 0 ];
        if (!s) {
          return [ p.personal[ 0 ].fullName, 0 ];
        } else {
          return [ p.personal[ 0 ].fullName, s[ stat ] ];
        }
      }
    });
    return ret;
  }
  buildChart(data, stat): void {
    Highcharts.chart('teamStatsChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Stats for the ' + this._mlbStatsService.selectedYear + ' ' + this._mlbStatsService.selectedTeam.name
      },
      subtitle: {
        text: 'Source: <a href="https://github.com/chadwickbureau/baseballdatabank" target="_blank">Baseball Databank</a>',
        useHTML: true
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '10px',
            fontFamily: 'sans-serif'
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
        pointFormat: stat + ': <b>{point.y}</b>'
      },
      series: [{
        name: 'Game Wins',
        data: data,
      }]
    });
  }
  switchChart(node, stat): void {
    const data = this.buildChartData(node, stat);
    this.buildChart(data, stat);
  }
  goToPlayer(player: Player): void {
    this._mlbStatsService.setSelectedPlayer(player);
  }
}
