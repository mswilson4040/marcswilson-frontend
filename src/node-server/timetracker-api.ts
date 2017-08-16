export class TimeTrackerApi {
  private _express: any = null;
  private _router: any = null;
  private _mongodb: any = null;
  private _DB_PATH = 'mongodb://localhost:27017/timetrackerdb';

  constructor() {
    this._express = require('express');
    this._mongodb = require('mongodb').MongoClient;
    this._router = this._express.Router();
    this._router.post('/add', (request, response) => {
      this.addCompany(request.params.company).then( result => {
        response.json(result);
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
              resolve(companies);
            });
            db.close();
          }, error => {
            db.close();
            reject(error);
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
          collection.distinct('name', {}).then( docs => {
            db.close();
            resolve(docs);
          });
        }
      });
    });
  }
}

new TimeTrackerApi();
