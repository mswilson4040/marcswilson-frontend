export class Collection {
  public name: string = null;
  constructor(data?) {
    if (data) {
      this.name = data.name;
    }
  }
}
