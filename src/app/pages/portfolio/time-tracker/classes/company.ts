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

class Entry {
  public date: Date = new Date();
  public description: string = null;
  public project: Project = new Project();
  constructor() {}
}

export class Project {
  public name: string = null;
  public _id: string = null;
  public companyId: string = null;
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this._id = data._id;
      this.companyId = data.companyId;
    }
  }
}
