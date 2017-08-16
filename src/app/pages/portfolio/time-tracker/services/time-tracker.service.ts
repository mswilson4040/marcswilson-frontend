import { Injectable } from '@angular/core';
import { Company } from '../classes/company';
import { Http } from '@angular/http';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class TimeTrackerService {
  public companies: Array<Company> = new Array<Company>();
  constructor(private _http: Http) { }
  getCompanies(): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this.companies = new Array<Company>();
      for (let i = 0; i < 15; i++) {
        this.companies.push(new Company({name: `Company ${i}`}));
      }
      if (this.companies) {
        resolve(this.companies);
      } else {
        reject(new Error('No Companies'));
      }
    });
  }
  addCompany(company: Company): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      try {
        if (company !== null) {
          this._http.post(`${environment.API_PATH}/timetracker/add`, {company: company}).subscribe( result => {
            if (result) {
              const comp = new Array<Company>();
              resolve(comp);
            }
          }, error => {
            reject(error);
          });
        }
      } catch (ex) {
        reject(ex);
      }
    });
  }

}
