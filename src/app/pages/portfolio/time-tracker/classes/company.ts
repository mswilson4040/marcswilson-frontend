export class Company {
  public name: string = null;
  public entries: Array<Entry> = new Array<Entry>();
  constructor(data?) {
    if (data) {
      this.name = data.name;
    }
  }
}

class Entry {
  public date: Date = new Date();
  public description: string = null;
  public project: Project = new Project();
  constructor() {}
}

class Project {
  public name: string = null;
  constructor() {}
}
