export class Database {
  public name: string;
  public sizeOnDisk: number;
  public empty: boolean;
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this.sizeOnDisk = data.sizeOnDisk;
      this.empty = data.empty;
    }
  }
}
