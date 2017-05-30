import {Player} from './player';
export class Team {

  // <editor-fold desc="Team Class Properties">
  public yearID: number = null;
  public lgID: string = null;
  public teamID: string = null;
  public franchID: string = null;
  public divID: string = null;
  public Rank: number = null;
  public G: number = null;
  public Ghome: number = null;
  public W: number = null;
  public L: number = null;
  public DivWin: string = null;
  public WCWin: string = null;
  public LgWin: string = null;
  public WSWin: string = null;
  public R: number = null;
  public AB: number = null;
  public '2B': number = null;
  public '3B': number = null;
  public HR: number = null;
  public BB: number = null;
  public SO: number = null;
  public SB: number = null;
  public CS: number = null;
  public HBP: number = null;
  public SF: number = null;
  public RA: number = null;
  public ER: number = null;
  public ERA: number = null;
  public CG: number = null;
  public SHO: number = null;
  public SV: number = null;
  public IPouts: number = null;
  public HA: number = null;
  public HRA: number = null;
  public BBA: number = null;
  public SOA: number = null;
  public E: number = null;
  public DP: number = null;
  public FP: number = null;
  public name: string = null;
  public park: string = null;
  public attendance: number = null;
  public BPF: number = null;
  public PPF: number = null;
  public teamIDBR: string = null;
  public teamIDlahman45: string = null;
  public teamIDretro: string = null;
  public totalTeamSalary: number = null;
  public players: Array<Player> = null;
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
    this.totalTeamSalary = this.getTotalTeamSalary();
    this.initPlayers();
  }
  initPlayers(): void {
    if (this.players !== null) {
      this.players = this.players.map( (p) => {
        return new Player(p);
      });
    }
  }
  getTotalTeamSalary(): number {
    if (this.players) {
      let sal = 0;
      for (let i = 0; i < this.players.length; i++) {
        const p = this.players[i];
        if (p && p.salaries.length > 0) {
          sal += p.salaries[0].salary;
        }
      }
      return sal;
    } else {
      return 0;
    }

  }
}
