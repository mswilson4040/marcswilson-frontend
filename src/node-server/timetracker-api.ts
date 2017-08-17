export class TimeTrackerApi {
  private _express: any = null;
  private _router: any = null;
  private _mongodb: any = null;
  private _DB_PATH = 'mongodb://localhost:27017/timetrackerdb';

  constructor() {
    this._express = require('express');
    this._mongodb = require('mongodb').MongoClient;
    this._router = this._express.Router();
    this._router.post('/addcompany', (request, response) => {
      this.addCompany(request.body.company).then( result => {
        response.json(result);
      }, error => {
        response.json(error);
      });
    });
    this._router.post('/addproject', (request, response) => {
      this.addProject(request.body.company, request.body.project).then( result => {
        response.json(result);
      }, error => {
        response.json(error);
      });
    });
    this._router.get('/companies', (request, response) => {
      this.getCompanies().then(companies => {
        response.json(companies);
      }, error => {
        response.json(error);
      });
    });
    module.exports = this._router;
  }
  addCompany(company): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._mongodb.connect(this._DB_PATH, (connectionError, db) => {
        const collection = db.collection('companies');
        if (connectionError) {
          reject(connectionError);
          db.close();
        } else {
          collection.insert(company).then( response => {
            this.getCompanies().then( companies => {
              db.close();
              resolve(companies);
            });

          }, error => {
            db.close();
            reject(error);
          });
        }
      });
    });
  }
  addProject(company, project): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._mongodb.connect(this._DB_PATH, (connectionError, db) => {
        if (connectionError) {
          reject(connectionError);
          db.close();
        } else {
          const collection = db.collection('projects');
          collection.insert({test: 't'}).then( response => {
            db.close();
            resolve(response);
          });
        }
      });
    });
  }
  getCompanies(): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this._mongodb.connect(this._DB_PATH, (connectionError, db) => {
        const collection = db.collection('companies');
        if (connectionError) {
          reject(connectionError);
        } else {
          collection.find().toArray( (queryError, docs) => {
            if (queryError) {
              db.close();
              reject(queryError);
            } else {
              db.close();
              resolve(docs);
            }
          });
        }
      });
    });
  }
}

new TimeTrackerApi();
