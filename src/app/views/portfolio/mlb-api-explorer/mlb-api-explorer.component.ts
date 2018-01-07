import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {UIService} from '../../../shared-services/ui.service';
import {Http} from '@angular/http';
import {Player} from '../mlb-stats/classes/player';
import {Team} from '../mlb-stats/classes/team';
import {MlbStatsService} from '../mlb-stats/services/mlb-stats.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-mlb-api-explorer',
  templateUrl: './mlb-api-explorer.component.html',
  styleUrls: ['./mlb-api-explorer.component.scss']
})
export class MlbApiExplorerComponent implements OnInit {

  public URL_ROOT: string = this.getUrlRoot();
  public path: string = null;
  public teams: Array<Team> = new Array<Team>();
  public team: FormControl;
  public filteredTeams: Observable<Array<Team>>;
  public selectedTeam: Team = new Team();
  public selectedTeamYear = 1977;
  public endpointSelected = false;
  public picker: Date = null;
  public years: Array<number>;
  public playerYear: FormControl;
  public filteredPlayerYears: Observable<Array<number>>;
  public selectedPlayersYear = 1977;
  public players: Array<Player> = new Array<Player>();
  public player: FormControl;
  public filteredPlayers: Observable<Array<Player>>;
  public selectedPlayer: Player = null;

  constructor(private _http: Http, private _uiService: UIService, private _mlbStatsService: MlbStatsService) {
    this.team = new FormControl();
    this.playerYear = new FormControl();
    this.player = new FormControl();
    this._mlbStatsService.getDistinctYears().then( years => {
      this.years = years;
      this.filteredTeams = this.team.valueChanges.startWith(null).map( t => this.filterTeams(t));
      this.filteredPlayerYears = this.playerYear.valueChanges.startWith(null).map( y => this.filterYears(y));
      this.filteredPlayers = this.player.valueChanges.startWith(null).map( p => this.filterPlayers(p));
    });
  }
  teamYearSelected(evt): void {
    this.selectedTeamYear = evt.source.value;
    this._mlbStatsService.getTeamsByYear(this.selectedTeamYear).then( teams => {
      this.teams = teams;
    });
  }
  teamSelected(team: Team): void {
    this.selectedTeam = team;
    if (this.selectedTeam) {
      this._mlbStatsService.getTeamByYear(this.selectedTeamYear, this.selectedTeam).then( t => {
        this.path = `${this.URL_ROOT}api/mlbstats/years/${this.selectedTeamYear}/teams/${team.teamID}`;
      });
    }
  }
  filterTeams(team: string): Array<Team> {
    if (team) {
      const res = this.teams.filter(t => {
        return t.name.toLowerCase().indexOf(team.toLowerCase()) === 0;
      });
      return res;
    } else {
      return this.teams;
    }
  }
  playersYearSelected(evt): void {
    this.selectedPlayersYear = evt.source.value;
    this._mlbStatsService.getPlayersByYear(this.selectedPlayersYear).then(players => {
      this.players = players;
    });
  }
  filterYears(year: number): Array<number> {
    if (year) {
      const res = this.years.filter(y => {
        return y.toString().indexOf(year.toString()) === 0;
      });
      return res;
    } else {
      return this.years;
    }
  }
  filterPlayers(player: string): Array<Player> {
    if (player && this.players.length > 0) {
      const res = this.players.filter(p => {
        return p.personal[0].fullName.toLowerCase().indexOf(player.toLowerCase()) === 0;
      });
      return res;
    } else {
      return this.players;
    }
  }
  playerSelected(player: Player): void {
    this.selectedPlayer = player;
    if (this.selectedPlayer !== null) {
      this.path = `${this.URL_ROOT}api/mlbstats/players/id/${this.selectedPlayer.playerID}`;
    }
  }
  ngOnInit(): void {
    this.path = this.URL_ROOT;
  }
  getUrlRoot(): string {
    const rootUrl = window.location.href;
    const root = rootUrl.toString().replace('4200', '3000');
    const regex = new RegExp(/^.*\//);

    return regex.exec(root).toString();
  }
  fetchAPIResult(): void {
    if (this.path !== this.URL_ROOT) {
      this._http.get(this.path).subscribe(response => {
        const jObj = JSON.parse(response[ '_body' ]);
        $('#results')[ 'jsonViewer' ](jObj);
      });
    } else {

    }
  }
  boxscoresDateChanged(date: Date): void {
    this.picker = date;
    const year = this.picker.getFullYear();
    const month = this.picker.getMonth() + 1;
    const day = this.picker.getDate();
    this.path = `${this.URL_ROOT}api/mlbstats/boxscores/${year}/${month}/${day}`;
  }
  getAllBallparks(): void {
    this.path = this.URL_ROOT + 'api/mlbstats/ballparks';
  }

}
