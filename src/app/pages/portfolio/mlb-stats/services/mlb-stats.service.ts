import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Team } from '../classes/team';
import { Player } from '../classes/player';
import { Http } from '@angular/http';
import { Ballpark } from '../classes/ballpark';
import { Appearance } from '../classes/appearance';
import {Personal} from '../classes/personal';
import {Game} from '../classes/boxscores/game';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class MlbStatsService {

  public selectedYear$: BehaviorSubject<any> = new BehaviorSubject<any>(1977);
  public selectedTeam$: BehaviorSubject<Team> = new BehaviorSubject<Team>(null);
  public selectedPlayer$: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);

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
      this.http.get(`${environment.API_PATH}/mlbstats/years`).subscribe(years => {
        const ret = JSON.parse(years['_body']);
        resolve(ret);
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
      this.http.get(`${environment.API_PATH}/mlbstats/years/${yearID}/teams`).subscribe( teams => {
        const parsed = JSON.parse(teams['_body']);
        const ts = parsed.map( (t) => {
          return new Team(t);
        });
        resolve(ts);
      });
    });
  }
  getTeamByYear(yearID: number, team: Team): Promise<Team> {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.API_PATH}/mlbstats/years/${yearID}/teams/${team.teamID}`).subscribe( t => {
        t = JSON.parse(t['_body']);
        const theTeam = new Team(t);
        resolve(theTeam);
      });
    });
  }
  getPlayersByName(name: string): Promise<Array<Personal>> {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.API_PATH}/mlbstats/players/name/${name}`).subscribe( personal => {
        const ret = JSON.parse(personal['_body']);
        resolve(ret);
      });
    });
  }
  getPlayersByYear(yearID: number): Promise<Array<Player>> {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.API_PATH}/mlbstats/years/${yearID}/players`).subscribe( players => {
        const body = JSON.parse(players['_body']);
        const retPlayers = body.map( p => {
          return new Player(p);
        });
        resolve(retPlayers);
      });
    });
  }
  getFullPlayerStats(player: Player): Promise<Array<Appearance>> {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.API_PATH}/mlbstats/players/id/${player.playerID}`).subscribe( appearances => {
        const ret = JSON.parse(appearances['_body']);
        resolve(ret);
      });
    });
  }
  getAllBallparks(): Promise<Array<Ballpark>> {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.API_PATH}/mlbstats/ballparks`).subscribe( ballparks => {
        const ret = JSON.parse(ballparks['_body']);
        resolve(ret);
      });
    });
  }
  getBoxScores(date: Date): Promise<any> {
    const url = `${environment.API_PATH}/mlbstats/boxscores/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return new Promise( (resolve, reject) => {
      this.http.get(url).subscribe( bs => {
        const obj = JSON.parse(bs['_body']);
        let ret = new Array<Game>();
        if (obj.hasOwnProperty('data')) {
          const game = obj.data.games.game;
          if (game && typeof game.length !== 'undefined') {
            ret = game.map(g => {
              return new Game(g);
            });
          } else {
            if (game) {
              ret.push(new Game(game));
            }
          }
        }
        resolve(ret);
      }, error => {
          reject(error);
      });
    });
  }
  setSelectedTeam(team: Team) {
    this.selectedTeam = team;
  }
  setSelectedPlayer(player: Player) {
    this.selectedPlayer = player;
  }
  setSelectedYear(year: number) {
    this.selectedYear = year;
  }
}
