import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Team} from '../classes/team';
import {Player} from '../classes/player';
import {Http} from '@angular/http';
import {Ballpark} from '../classes/ballpark';
import {Appearance} from '../classes/appearance';

@Injectable()
export class MlbStatsService {

  public selectedYear$: BehaviorSubject<any> = new BehaviorSubject<any>(1871);
  public selectedTeam$: BehaviorSubject<Team> = new BehaviorSubject<Team>(null);
  public selectedPlayer$: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);
  readonly API_PATH = '/api/mlbstats/';

  set selectedYear(value: any) {
    if (value !== null) {
      this.selectedYear$.next(value);
    }
  }
  get selectedYear() {
    return this.selectedYear$.getValue();
  }

  set selectedTeam(value: any) {
    if (value !== null) {
      this.selectedTeam$.next(value);
    }
  }
  get selectedTeam() {
    return this.selectedTeam$.getValue();
  }
  set selectedPlayer(value: Player) {
    if (value !== null) {
      this.selectedPlayer$.next(value);
    } else {
      this.selectedPlayer$.next(null);
    }
  }
  get selectedPlayer() {
    return this.selectedPlayer$.getValue();
  }

  constructor(private http: Http) {

  }

  getDistinctYears(): Promise<Array<number>> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/mlbstats/years').subscribe(years => {
        years = JSON.parse(years['_body']);
        resolve(years);
      });
    });
  }
  getTeamColorsJSON(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/public/pages/PortfolioComponent/MLBStats/data/teamcolors.json').subscribe(json => {
        json = JSON.parse(json['_body']);
        resolve(json);
      });
    });
  }
  getTeamsByYear(yearID: number): Promise<Array<Team>> {
    return new Promise( (resolve, reject) => {
      this.http.get(this.API_PATH + 'years/' + yearID + '/teams').subscribe( teams => {
        teams = JSON.parse(teams['_body']);
        resolve(teams);
      });
    });
  }
  getTeamByYear(yearID: number, team: Team): Promise<Team> {
    return new Promise( (resolve, reject) => {
      this.http.get(this.API_PATH + 'years/' + yearID + '/teams/' + team.teamID).subscribe( t => {
        resolve(t);
      });
    });
  }
  getPlayerIdByName(name: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.get(this.API_PATH + 'players/name/' + name).subscribe( playerID => {
        playerID = JSON.parse(playerID['_body']);
        resolve(playerID);
      });
    });
  }
  getFullPlayerStats(player: Player): Promise<Array<Appearance>> {
    return new Promise( (resolve, reject) => {
      this.http.get(this.API_PATH + 'players/id/' + player.playerID).subscribe( appearances => {
        appearances = JSON.parse(appearances['_body']);
        resolve(appearances);
      });
    });
  }
  getAllBallparks(): Promise<Array<Ballpark>> {
    return new Promise( (resolve, reject) => {
      this.http.get(this.API_PATH + 'ballparks').subscribe( ballparks => {
        ballparks = JSON.parse(ballparks['_body']);
        resolve(ballparks);
      });
    });
  }
  setSelectedTeam(team: Team) {
    this.selectedTeam = team;
  }
  setSelectedPlayer(player: Player) {
    this.selectedPlayer = player;
  }
}
