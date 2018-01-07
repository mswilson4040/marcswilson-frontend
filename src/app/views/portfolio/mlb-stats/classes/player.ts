import {Personal} from './personal';
import {Pitching} from './pitching';
import {Fielding} from './fielding';
import {Batting} from './batting';
import {Salaries} from './salaries';
import {IndividualAward} from './individual-award';
export class Player {

  // <editor-fold desc="Player Class Properties">
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
  public pitching: Array<Pitching> = null;
  public fielding: Array<Fielding> = null;
  public batting: Array<Batting> = null;
  public salaries: Array<Salaries> = null;
  public individualAwards: Array<IndividualAward> = null;
  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[ obj ] = data[ obj ];
        }
      }
      this.init();
    }
  }

  init(): void {
    this.personal = this.initPersonal();
    this.pitching = this.initPitching();
    this.fielding = this.initFielding();
    this.batting = this.initBatting();
    this.salaries = this.initSalaries();
    this.individualAwards = this.initIndividualAwards();
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
  initPitching(): Array<Pitching> {
    const p = new Array<Pitching>();
    if (this.pitching) {
      for (let i = 0; i < this.pitching.length; i++) {
        p.push(new Pitching(this.pitching[i]));
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
  initIndividualAwards(): Array<IndividualAward> {
    const ia = new Array<IndividualAward>();
    if (this.individualAwards) {
      for (let i = 0; i < this.individualAwards.length; i++) {
        ia.push(new IndividualAward(this.individualAwards[i]));
      }
    }
    return ia;
  }
}
