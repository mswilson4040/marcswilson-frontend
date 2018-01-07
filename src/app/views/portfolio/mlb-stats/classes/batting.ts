export class Batting {

  // <editor-fold desc="Batting class properties">
  public playerID: string = null;
  public yearID: number = null;
  public stint: number = null;
  public teamID: string = null;
  public lgID: string = null;
  public G: number = null;
  public AB: number = null;
  public R: number = null;
  public H: number = null;
  public '2B': number = null;
  public '3B': number = null;
  public HR: number = null;
  public RBI: number = null;
  public SB: number = null;
  public CS: number = null;
  public BB: number = null;
  public SO: number = null;
  public IBB: number = null;
  public HBP: number = null;
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
