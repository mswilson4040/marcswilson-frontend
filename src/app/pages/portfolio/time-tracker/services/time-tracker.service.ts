import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import {Company, Entry, Project} from '../classes/company';

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
  addProject(company: Company, project: Project): Promise<Array<Project>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/addproject`, { company: company, project: project }).subscribe( _projects => {
        const projects = JSON.parse(_projects['_body']).map( p => { return new Project(p); });
        resolve(projects);
      }, error => {
        reject(error);
      });
    });
  }
  addEntry(company: Company, entry: Entry): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/company/addentry`, { company: company, entry: entry }).subscribe( _entries => {
        const entries = JSON.parse(_entries['_body']).map( e => { return new Entry(e); });
        resolve(entries);
      }, error => {
        reject(error);
      });
    });
  }
  deleteEntry(entry: Entry, company: Company): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/company/${company._id}/entries/${entry._id}/delete`).subscribe( _entries => {
        const entries = JSON.parse(_entries['_body']).map( e => { return new Entry(e); });
        resolve(entries);
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
  getProjectsByCompany(company: Company): Promise<Array<Project>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/projects/${company._id}`).subscribe( response => {
        const projects = JSON.parse(response['_body']).map( p => { return new Project(p); });
        resolve(projects);
      }, error => {
        reject(error);
      });
    });
  }
  getEntriesByCompany(company: Company): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/company/entries/${company._id}`).subscribe( _entries => {
        try {
          const entries = JSON.parse(_entries['_body']).map( e => { return new Entry(e); });
          resolve(entries);
        } catch (ex) {
          reject(ex);
        }
      }, error => {
        reject(error);
      });
    });
  }
}
