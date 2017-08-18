export class Company {
  public name: string = null;
  public _id: string = null;
  public projects: Array<Project> = new Array<Project>();
  constructor(data?) {
    if (data) {
      this.name = data.name;
      this._id = data._id;
      this.projects.push(new Project());
      this.projects.push(new Project());
      this.projects.push(new Project());
      this.projects.push(new Project());
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
  constructor() {}
}
