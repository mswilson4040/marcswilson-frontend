import { Collection } from './collection';

export class Database {
  public name: string;
  public sizeOnDisk: number;
  public empty: boolean;
  public collections: Collection[] = [];
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this.sizeOnDisk = data.sizeOnDisk;
      this.empty = data.empty;
      this.collections = data.collections ? data.collections.map( c => new Collection(c) ) : [];
    }
  }
}
