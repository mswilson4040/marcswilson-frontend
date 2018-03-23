export class Ballpark {
  public _id: string = null;
  public park: { key: string, name: string, alias: string } = null;
  public city: string = null;
  public state: string = null;
  public country: string = null;

  constructor(ballpark?) {
    if (ballpark) {
      this._id = ballpark._id;
      this.park = ballpark.park;
      this.city = ballpark.city;
      this.state = ballpark.state;
      this.country = ballpark.country;
    }
  }
}
