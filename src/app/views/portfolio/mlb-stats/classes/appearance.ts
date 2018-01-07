import {Personal} from './personal';
import {Fielding} from './fielding';
import {Batting} from './batting';
import {Pitching} from './pitching';
import {IndividualAward} from './individual-award';
import {Team} from './team';
import {AllStar} from './all-star';
import {Salaries} from './salaries';
import {SharedAward} from './shared-award';
import {College} from './college';
export class Appearance {

  // <editor-fold desc="Appearance class properties">
  public yearID: number = null;
  public teamID: string = null;
  public lgID: string = null;
  public playerID: string = null;
  public G_all: number = null;
  public GS: number = null;
  public G_batting: number = null;
  public G_defense: number = null;
  public G_p: number = null;
  public G_c: number = null;
  public G_1b: number = null;
  public G_2b: number = null;
  public G_3b: number = null;
  public G_ss: number = null;
  public G_lf: number = null;
  public G_cf: number = null;
  public G_rf: number = null;
  public G_of: number = null;
  public G_dh: number = null;
  public G_ph: number = null;
  public G_pr: number = null;
  public personal: Array<Personal> = null;
  public fielding: Array<Fielding> = null;
  public allstar: Array<AllStar> = null;
  public batting: Array<Batting> = null;
  public salaries: Array<Salaries> = null;
  public pitching: Array<Pitching> = null;
  public individualAwards: Array<IndividualAward> = null;
  public sharedAwards: Array<SharedAward> = null;
  public colleges: Array<College> = null;
  public teams: Array<Team> = null;

  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[obj] = data[obj];
        }
      }
      this.init();
    }
  }
  init(): void {
    this.personal = this.initPersonal();
    this.fielding = this.initFielding();
    this.allstar = this.initAllStar();
    this.batting = this.initBatting();
    this.salaries = this.initSalaries();
    this.pitching = this.initPitching();
    this.individualAwards = this.initIndividualAwards();
    this.sharedAwards = this.initSharedAwards();
    this.colleges = this.initColleges();
    this.teams = this.initTeams();
  }
  initPersonal(): Array<Personal> {
    const p = new Array<Personal>();
    if (this.personal) {
      for (let i = 0; i < this.personal.length; i++) {
        p.push(new Personal(this.personal[i]));
      }
    }
    return p;
  }
  initFielding(): Array<Fielding> {
    const f = new Array<Fielding>();
    if (this.fielding) {
      for (let i = 0; i < this.fielding.length; i++) {
        f.push(new Fielding(this.fielding[i]));
      }
    }
    return f;
  }
  initAllStar(): Array<AllStar> {
    const a = new Array<AllStar>();
    if (this.allstar) {
      for (let i = 0; i < this.allstar.length; i++) {
        a.push(new AllStar(this.allstar[i]));
      }
    }
    return a;
  }
  initBatting(): Array<Batting> {
    const b = new Array<Batting>();
    if (this.batting) {
      for (let i = 0; i < this.batting.length; i++) {
        b.push(new Batting(this.batting[i]));
      }
    }

    return b;
  }
  initSalaries(): Array<Salaries> {
    const s = new Array<Salaries>();
    if (this.salaries) {
      for (let i = 0; i < this.salaries.length; i++) {
        s.push(new Salaries(this.salaries[i]));
      }
    }

    return s;
  }
  initPitching(): Array<Pitching> {
    const p = new Array<Pitching>();
    if (this.pitching) {
      for (let i = 0; i < this.pitching.length; i++) {
        p.push(new Pitching(this.pitching[i]));
      }
    }
    return p;
  }
  initIndividualAwards(): Array<IndividualAward> {
    const a = new Array<IndividualAward>();
    if (this.individualAwards) {
      for (let i = 0; i < this.individualAwards.length; i++) {
        a.push(new IndividualAward(this.individualAwards[i]));
      }
    }

    return a;
  }
  initSharedAwards(): Array<SharedAward> {
    const a = new Array<SharedAward>();
    if (this.sharedAwards) {
      for (let i = 0; i < this.sharedAwards.length; i++) {
        a.push(new SharedAward(this.sharedAwards[i]));
      }
    }
    return a;
  }
  initColleges(): Array<College> {
    const c = new Array<College>();
    if (this.colleges) {
      for (let i = 0; i < this.colleges.length; i++) {
        c.push(new College(this.colleges[i]));
      }
    }
    return c;
  }
  initTeams(): Array<Team> {
    const t = new Array<Team>();
    if (this.teams) {
      for (let i = 0; i < this.teams.length; i++) {
        t.push(new Team(this.teams[i]));
      }
    }
    return t;
  }
}
