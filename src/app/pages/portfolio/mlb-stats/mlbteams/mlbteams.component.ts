import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from '../classes/team';
import {MlbStatsService} from '../services/mlb-stats.service';
declare const Highcharts: any; // TODO: Fix reference to proper ES6 syntax
@Component({
  selector: 'app-mlbteams',
  templateUrl: './mlbteams.component.html',
  styleUrls: ['./mlbteams.component.css']
})
export class MLBteamsComponent implements OnInit, OnDestroy {

  public teams: Array<Team> = new Array<Team>();
  constructor(private mlbstatsService: MlbStatsService) {
    this.mlbstatsService.selectedYear$.subscribe(year => {
      this.mlbstatsService.getTeamsByYear(year).then(teams => {
        this.teams = teams.map( (team) => {
          return new Team(team);
        });
        const data = this.buildChartData(this.teams);
        this.buildChart(data);
      });
    });
  }

  ngOnInit(): void {
    $('#mlbTeamStatsContainer').fadeIn();

  }
  ngOnDestroy(): void {
    $('#mlbTeamStatsContainer').fadeOut();
  }
  buildChartData(data): Array<any> {
    const ret = data.map( (team) => {
      return [team.name, team.W];
    });

    return ret;
  }
  buildChart(data): void {
    Highcharts.chart('mlbTeamChartContainer', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Game Wins for the ' + this.mlbstatsService.selectedYear + ' Season'
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
        pointFormat: 'Game Wins in ' + this.mlbstatsService.selectedYear + ': <b>{point.y}</b>'
      },
      series: [{
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
      }]
    });
  }
  goToTeam(team: Team): void {
    this.mlbstatsService.setSelectedTeam(team);
  }
}

