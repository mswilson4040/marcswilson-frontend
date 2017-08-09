import { Injectable } from '@angular/core';
import { Company } from '../classes/company';

@Injectable()
export class TimeTrackerService {

  constructor() { }
  getCompanies(): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      const companies = new Array<Company>();
      for (let i = 0; i < 15; i++) {
        companies.push(new Company({name: `Company ${i}`}));
      }
      if (companies) {
        resolve(companies);
      } else {
        reject(new Error('No Companies'));
      }
    });
  }

}
