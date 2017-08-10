import { Injectable } from '@angular/core';
import { Company } from '../classes/company';

@Injectable()
export class TimeTrackerService {
  public companies: Array<Company> = new Array<Company>();
  constructor() { }
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
          this.companies.push(company);
        }
        resolve(this.companies);
      } catch (ex) {
        reject(ex);
      }
    });
  }

}
