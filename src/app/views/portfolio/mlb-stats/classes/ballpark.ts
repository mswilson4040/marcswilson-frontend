export class Ballpark {

  // <editor-fold desc="Ballpark class properties">
  public park: Park = null;
  public city: string = null;
  public state: string = null;
  public country: string = null;
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
    this.initPark();
  }
  initPark(): Park {
    let p = new Park();
    if (this.park) {
      p = new Park(this.park);
    }
    return p;
  }
}

export class Park {
  // <editor-fold desc="Park class properties">
  public key: string = null;
  public name: string = null;
  public alias: string = null;
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
