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
    this._router.post('company/addproject', (request, response) => {
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
    this._router.get('/projects/:companyId', (request, response) => {
      this.getProjectsByCompanyId(request.params.companyId).then(projects => {
        response.json(projects);
      }, error => {
        response.json(error);
      });
    });
    this._router.post('/project/addentry', (request, response) => {
      this.addEntry(request.body.entry).then( result => {
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
          db.close();
          reject(connectionError);
        } else {
          collection.insert({name: company.name}).then( response => {
            db.close();
            resolve(response);
          }, error => {
            db.close();
            reject(error);
          });
        }
      });
    });
  }
  addEntry(entry): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._mongodb.connect(this._DB_PATH, (connectionError, db) => {
        const collection = db.collection('entries');
        if (connectionError) {
          db.close();
          reject(connectionError);
        } else {
          collection.insert({
            date: entry.date,
            projectId: entry.projectId,
            companyId: entry.companyId,
            description: entry.description,
            timeSpent: entry.timeSpent
          }).then( response => {
            db.close();
            resolve(response);
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
          collection.insert({companyId: company._id, name: project.name}).then( response => {
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
  getProjectsByCompanyId(companyId): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._mongodb.connect(this._DB_PATH, (connectionError, db) => {
        const collection = db.collection('projects');
        if (connectionError) {
          db.close();
          reject(connectionError);
        } else {
          collection.find({ companyId: companyId }).toArray( (queryError, docs) => {
            resolve(docs);
          }, error => {
            reject(error);
          });
        }
      });
    });
  }
}

new TimeTrackerApi();
