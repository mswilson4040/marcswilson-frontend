export class Company {
  public name: string = null;
  public _id: string = null;
  public projects: Array<Project> = new Array<Project>();
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this._id = data._id;
      if (data.hasOwnProperty('projects')) {
        this.projects = data.projects.map(p => {
          return new Project(p);
        });
      }
    }
  }
}
export class Project {
  public name: string = null;
  public _id: string = null;
  public companyId: string = null;
  public entries: Array<Entry> = new Array<Entry>();
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this._id = data._id;
      this.companyId = data.companyId;
      this.entries = data.entries;
    }
  }
}
export class Entry {
  public date: Date = null;
  public projectId: string = null;
  public companyId: string = null;
  public description: string = null;
  public timeSpent: number = null;
  constructor(data?) {
    if (data) {
      this.date = data.date;
      this.projectId = data.projectId;
      this.description = data.description;
      this.timeSpent = data.timeSpent;
    }
  }
}
