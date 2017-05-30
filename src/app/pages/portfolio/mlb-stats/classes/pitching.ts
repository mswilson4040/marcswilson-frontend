export class Pitching {

  // <editor-fold desc="Pitching class properties">
  public playerID: string = null;
  public yearID: number = null;
  public stint: number = null;
  public teamID: string = null;
  public lgID: string = null;
  public W: number = null;
  public L: number = null;
  public G: number = null;
  public GS: number = null;
  public CG: number = null;
  public SHO: number = null;
  public SV: number = null;
  public IPouts: number = null;
  public H: number = null;
  public ER: number = null;
  public HR: number = null;
  public BB: number = null;
  public SO: number = null;
  public BAOpp: number = null;
  public ERA: number = null;
  public IBB: number = null;
  public WP: number = null;
  public HBP: number = null;
  public BK: number = null;
  public BFP: number = null;
  public GF: number = null;
  public R: number = null;
  public SH: number = null;
  public SF: number = null;
  public GIDP: number = null;
  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[obj] = data[obj];
        }
      }
    }
  }
}
