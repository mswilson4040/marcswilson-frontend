import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../classes/player';
import {Appearance} from '../classes/appearance';
import {MlbStatsService} from '../services/mlb-stats.service';

declare const Highcharts: any; // TODO: Fix reference to proper ES6 syntax

@Component({
  selector: 'app-mlbplayers',
  templateUrl: './mlbplayers.component.html',
  styleUrls: ['./mlbplayers.component.css']
})
export class MLBPlayersComponent implements OnInit, OnDestroy {

  public playerName: string = null;
  public searchResult: Array<Player> = new Array<Player>();
  public selectedPlayer: Array<Appearance> = new Array<Appearance>();
  constructor(private mlbStatsService: MlbStatsService) {}
  ngOnInit(): void {
    const selectedPlayer = this.mlbStatsService.selectedPlayer;

    if (selectedPlayer !== null) {
      this.playerName = selectedPlayer.personal[0].fullName;
      this.goToPlayer(selectedPlayer);
    }
    $('#mlbPlayerStatsComponentContainer').fadeIn();
  }
  ngOnDestroy(): void {

  }
  playerChanged(val): void {
    this.selectedPlayer = [];
    $('#appearancesChart').empty();
    if (val && val.length > 3) {
      this.mlbStatsService.getPlayerIdByName(val).then(player => {
        this.searchResult = player;
      });
    }
  }
  goToPlayer(player: Player) {
    this.mlbStatsService.getFullPlayerStats(player).then(appearances => {
      appearances = appearances.map( (a) => {
        return new Appearance(a);
      });
      this.searchResult = [];
      this.selectedPlayer = appearances;
      const data = this.buildChartData('batting', 'HR');
      this.buildChart(data, 'HR');
    });
  }
  buildChartData(node, stat): Array<any> {
    const ret = this.selectedPlayer.map( (a) => {
      const s = a[node][0];
      if (s) {
        if (a[node][0][stat] === '') {
          return [a.yearID, 0];
        } else {
          return [a.yearID, a[node][0][stat]];
        }

      } else {
        return [a.yearID, 0];
      }

    });
    return ret;
  }
  switchChart(node, stat): void {
    const data = this.buildChartData(node, stat);
    this.buildChart(data, stat);
  }
  buildChart(data, stat): void {
    Highcharts.chart('appearancesChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Stats for ' + this.selectedPlayer[0].personal[0].fullName
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
  toggleActive(evt): void {
    $('#yearTabsContainer').find('.active').removeClass('active');
    $(evt.currentTarget).addClass('active');
  }
}

