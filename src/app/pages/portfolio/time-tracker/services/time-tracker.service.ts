import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { Company } from '../classes/company';

@Injectable()
export class TimeTrackerService {

  public API_PATH = `${environment.API_PATH}/timetracker`;

  constructor(private _http: Http) {

  }
  addCompany(company: Company): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/addcompany`, {company: company}).subscribe( _companies => {
        try {
          const companies = JSON.parse(_companies['_body']).map( c => { return new Company(c); });
          resolve(companies);
        } catch (err) {
          reject(err.message);
        }
      }, error => {
        reject(error);
      });
    });
  }
  getCompanies(): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/companies`).subscribe( _companies => {
        try {
          const companies = JSON.parse(_companies['_body']).map( c => { return new Company(c); });
          resolve(companies);
        } catch (ex) {
          reject(ex);
        }
      }, error => {
        reject(error);
      });
    });
  }
}
