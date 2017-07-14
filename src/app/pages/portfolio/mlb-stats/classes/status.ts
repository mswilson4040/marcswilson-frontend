export class Status {
  public status: string = null;
  constructor(data?) {
    if (data) {
      this.status = data.status;
    }
  }
}
