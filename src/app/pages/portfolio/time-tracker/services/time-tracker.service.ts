import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { Company, Entry, Project } from '../classes/company';
import { Invoice } from '../classes/invoice';
import * as XLSX from 'xlsx';

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
  updateEntry(company: Company, entry: Entry): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/company/updateentry`, {company: company, entry: entry}).subscribe( _entries => {
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
  addInvoice(invoice: Invoice): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/invoice/addinvoice`, { invoice: invoice }).subscribe( result => {
        if (result) {
          this.getInvoices(invoice.userId).then( invoices => {
            resolve(invoices);
          }, error => {
            reject(error);
          });
        }
      }, error => {
        reject(error);
      });
    });
  }
  getInvoices(userId: string): Promise<Array<Invoice>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/invoice/invoices/${userId}`).subscribe( _invoices => {
        if (_invoices) {
          const parsed = JSON.parse(_invoices['_body']);
          const invoices = parsed.map( i => {
            return new Invoice(i);
          });
          resolve(invoices);
        }
      });
    });
  }
  exportInvoice(invoice: Invoice): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/invoice/export/${invoice._id}`).subscribe( _invoice => {
        if (_invoice) {
          const parsed = JSON.parse(_invoice['_body']);
          if (parsed) {
            const workbook = XLSX.read(_invoice['_body'], { type: 'base64' });
            if (workbook) {

            }
          }
        }
      }, error => {
        reject(error);
      });
    });
  }
  getCompanies(userId: string): Promise<Array<Company>> {
    return new Promise( (resolve, reject) => {
      this._http.get(`${this.API_PATH}/companies/${userId}`).subscribe( _companies => {
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
  getEntriesByUserIdAndDateRange(start: Date, end: Date, userId: string): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/entries/getentriesbydaterange`, {
        start: start, end: end, userId: userId
      }).subscribe( _entries => {
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
  getEntriesByDateRangeAndCompanyId(start: Date, end: Date, company: Company): Promise<Array<Entry>> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${this.API_PATH}/entries/getentriesbycompanyid`, {
        start: start, end: end, companyId: company._id
      }).subscribe( _entries => {
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
