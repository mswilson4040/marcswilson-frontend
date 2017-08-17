import { Injectable } from '@angular/core';
import {Company, Project} from '../classes/company';
import { Http } from '@angular/http';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class TimeTrackerService {
  public companies: Array<Company> = new Array<Company>();
  constructor(private _http: Http) { }
  getCompanies(): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${environment.API_PATH}/timetracker/companies`).subscribe( companies => {
        if (companies) {
          const docs = JSON.parse(companies['_body']);
          const ret = docs.map( d => { return new Company(d); });
          resolve(ret);
        } else {
          reject(companies);
        }
      });
    });
  }
  addCompany(company: Company): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      if (company !== null) {
        this._http.post(`${environment.API_PATH}/timetracker/addcompany`, {company: company}).subscribe( result => {
          if (result) {
            const docs = JSON.parse(result['_body']);
            const comp = docs.map( d => { return new Company(d); });
            resolve(comp);
          }
        }, error => {
          reject(error);
        });
      }
    });
  }
  addProject(company: Company, project: Project): Promise<any> {
    return new Promise( (resolve, reject) => {
      if (company && project) {
        this._http.post(`${environment.API_PATH}/timetracker/addproject`, {company: company, project: project}).subscribe( result => {
          resolve(result);
        }, error => {
          reject(error);
        });
      } else {
        reject(new Error('No Company or Project passed in'));
      }
    });
  }

}
