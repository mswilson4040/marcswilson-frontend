export class Company {
  public name: string = null;
  public _id: string = null;
  public entries: Array<Entry> = new Array<Entry>();
  public projects: Array<Project> = new Array<Project>();
  constructor(company?) {
    if (company) {
      this.name = company.name;
      this._id = company._id;
      this.entries = company.entries;
      this.projects = company.projects;
    }
  }
}

export class Project {
  public name: string = null;
  public _id: string = null;
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this._id = data._id;
    }
  }
}

export class Entry {
  public date: Date = null;
  public project: Project = new Project();
  public description: string = null;
  public timeSpent: number = null;
}
