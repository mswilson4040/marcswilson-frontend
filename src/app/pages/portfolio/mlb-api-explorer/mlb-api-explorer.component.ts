import { Component, OnInit } from '@angular/core';
import {UIService} from '../../../shared-services/ui.service';
import {Http} from '@angular/http';
import {Player} from '../mlb-stats/classes/player';
import {Team} from '../mlb-stats/classes/team';
import {MlbStatsService} from '../mlb-stats/services/mlb-stats.service';

@Component({
  selector: 'app-mlb-api-explorer',
  templateUrl: './mlb-api-explorer.component.html',
  styleUrls: ['./mlb-api-explorer.component.css']
})
export class MlbApiExplorerComponent implements OnInit {

  public URL_ROOT: string = this.getUrlRoot();
  public path: string = null;
  public years: Array<number>;
  public teams: Array<Team>;
  public players: Array<Player>;
  public selectedYear: number = null;
  public selectedTeamID: string = null;
  public selectedPlayerID: string = null;
  public endpointSelected = false;

  constructor(private http: Http, private uiService: UIService, private mlbStatsService: MlbStatsService) {
  }

  ngOnInit(): void {
    this.path = this.URL_ROOT;
    this.getDistinctYears();
    $('#teamsYearDD').select2({placeholder: 'Select a year...', width: '100%'}).change( v => {this.selectedYearChange(v, 'teams'); });
    $('#teamsTeamDD').select2({placeholder: 'Select a team...', width: '100%'}).change( v => {this.selectedTeamChange(v); });
    $('#playersYearDD').select2({placeholder: 'Select a year...', width: '100%'}).change( v => {this.selectedYearChange(v, 'players'); });
    $('#playersPlayerDD').select2({placeholder: 'Select a player...', width: '100%'}).change( v => {this.selectedPlayerChange(v); });
  }
  getUrlRoot(): string {
    const rootUrl = window.location.href;
    const root = rootUrl.toString().replace('4200', '3000');
    const regex = new RegExp(/^.*\//);

    return regex.exec(root).toString();
  }
  fetchAPIResult(): void {
    if (this.path !== this.URL_ROOT) {
      this.uiService.showOverlay('Fetching API Results');
      this.http.get(this.path).subscribe(response => {
        const jObj = JSON.parse(response[ '_body' ]);
        $('#results')[ 'jsonViewer' ](jObj);
        this.uiService.hideOverlay();
      });
    } else {

    }
  }
  getDistinctYears(): void {
    this.uiService.showOverlay('Fetching seasons...');
    this.mlbStatsService.getDistinctYears().then( years => {
      this.years = years;
      this.uiService.hideOverlay();
    });
  }
  selectedYearChange(e, type): void {
    const yearID = $(e.currentTarget).val();
    this.selectedYear = +yearID;
    this.path = this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/' + type;
    if (type === 'teams') {
      this.getTeamsByYear();
    } else if (type === 'players') {
      this.getPlayersByYear();
    }

  }
  getTeamsByYear() {
    this.uiService.showOverlay('Fetching teams...');
    this.mlbStatsService.getTeamsByYear(this.selectedYear).then( teams => {
      this.teams = teams;
      this.uiService.hideOverlay();
    });
  }
  getPlayersByYear() {
    this.uiService.showOverlay('Fetching players...');
    this.http.get(this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/players').subscribe(players => {
      const parsed = JSON.parse(players['_body']);
      this.players = parsed;
      this.uiService.hideOverlay();
    });
  }
  selectedTeamChange(e): void {
    const teamID = $(e.currentTarget).val();
    this.selectedTeamID = teamID;
    this.path = this.URL_ROOT + 'api/mlbstats/years/' + this.selectedYear + '/teams/' + this.selectedTeamID;
  }
  selectedPlayerChange(e): void {
    const playerID = $(e.currentTarget).val();
    this.selectedPlayerID = playerID;
    this.path = this.URL_ROOT + 'api/mlbstats/players/id/' + this.selectedPlayerID;
  }
  getAllBallparks(): void {
    this.path = this.URL_ROOT + 'api/mlbstats/ballparks';
  }

}
