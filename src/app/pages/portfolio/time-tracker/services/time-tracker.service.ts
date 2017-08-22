import { Injectable } from '@angular/core';
import { Company, Entry, Project } from '../classes/company';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimeTrackerService {
  public companies$: BehaviorSubject<Array<Company>> = new BehaviorSubject<Array<Company>>(null);
  public activeCompany$: BehaviorSubject<Company> = new BehaviorSubject<Company>(null);
  public API_PATH = `${environment.API_PATH}/timetracker`;
  set companies(value: Array<Company>) {
    if (value !== null) {
      this.companies$.next(value);
    }
  }
  get companies() {
    return this.companies$.getValue();
  }
  set activeCompany(value: Company) {
    if (value !== null) {
      this.getEntriesByCompany(value).then( entries => {
        value.entries = entries;
        this.activeCompany$.next(value);
      });
    }
  }
  get activeCompany() {
    return this.activeCompany$.getValue();
  }

  constructor(private _http: Http) {
    this.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      this.companies = error;
    });
  }
  getCompanies(): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/companies`).subscribe( companies => {
        if (companies) {
          const docs = JSON.parse(companies['_body']);
          const ret = docs.map( d => { return new Company(d); });
          resolve(ret);
        } else {
          reject(companies);
        }
      }, error => {
        reject(error);
      });
    });
  }
  getProjectsByCompany(company: Company): Promise<Array<Project>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/projects/${company._id}`).subscribe( result => {
        if (result) {
          const parsed = JSON.parse(result['_body']);
          const projects = parsed.map( p => {
            return new Project(p);
          });
          // this.activeCompany.projects = projects;
          resolve(projects);
        }
      });
    });
  }
  getEntriesByCompany(company: Company): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/company/entries/${company._id}`).subscribe( response => {
        const parsed = JSON.parse(response['_body']);
        if (parsed) {
          const entries = parsed.map(e => {
            return new Entry(e);
          });
          resolve(entries);
        } else {
          resolve(new Array<Entry>());
        }
      }, error => {
        reject(error);
      });
    });
  }
  addCompany(company: Company): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      if (company !== null) {
        this._http.post(`${this.API_PATH}/addcompany`, {company: company}).subscribe( result => {
          if (result) {
            this.getCompanies().then(companies => {
              this.companies = companies;
              resolve(this.companies);
            });
          }
        }, error => {
          reject(error);
        });
      }
    });
  }
  addProject(company: Company, project: Project): Promise<Array<Project>> {
    return new Promise( (resolve, reject) => {
      if (company && project) {
        this._http.post(`${this.API_PATH}/company/addproject`, {company: company, project: project}).subscribe( result => {
          if (result) {
            this.getProjectsByCompany(company).then( projects => {
              resolve(projects);
            });
          }
        }, error => {
          reject(error);
        });
      } else {
        reject(new Error('No Company or Project passed in'));
      }
    });
  }
  addEntry(entry: Entry): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/project/addentry`, {entry: entry}).subscribe( result => {
        if (result) {
          this.getEntriesByCompany(this.activeCompany).then( entries => {
            resolve(entries);
          }, error => {
            reject(error);
          });
        } else {
          reject(result);
        }
      }, error => {
        reject(error);
      });
    });
  }
}
