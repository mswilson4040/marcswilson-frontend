export class Fielding {

  // <editor-fold desc="Fielding class properties">
  public playerID: string = null;
  public yearID: number = null;
  public stint: number = null;
  public teamID: string = null;
  public lgID: string = null;
  public POS: string = null;
  public G: number = null;
  public GS: number = null;
  public InnOuts: number = null;
  public PO: number = null;
  public A: number = null;
  public E: number = null;
  public DP: number = null;
  public PB: number = null;
  public WP: number = null;
  public SB: number = null;
  public CS: number = null;
  public ZR: number = null;
  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[ obj ] = data[ obj ];
        }
      }
    }
  }
}
