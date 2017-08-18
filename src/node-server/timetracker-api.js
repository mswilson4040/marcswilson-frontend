"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeTrackerApi = (function () {
    function TimeTrackerApi() {
        var _this = this;
        this._express = null;
        this._router = null;
        this._mongodb = null;
        this._DB_PATH = 'mongodb://localhost:27017/timetrackerdb';
        this._express = require('express');
        this._mongodb = require('mongodb').MongoClient;
        this._router = this._express.Router();
        this._router.post('/addcompany', function (request, response) {
            _this.addCompany(request.body.company).then(function (result) {
                response.json(result);
            }, function (error) {
                response.json(error);
            });
        });
        this._router.post('/addproject', function (request, response) {
            _this.addProject(request.body.company, request.body.project).then(function (result) {
                response.json(result);
            }, function (error) {
                response.json(error);
            });
        });
        this._router.get('/companies', function (request, response) {
            _this.getCompanies().then(function (companies) {
                response.json(companies);
            }, function (error) {
                response.json(error);
            });
        });
        this._router.get('/projects/:companyId', function (request, response) {
            _this.getProjectsByCompanyId(request.params.companyId).then(function (projects) {
                response.json(projects);
            }, function (error) {
                response.json(error);
            });
        });
        module.exports = this._router;
    }
    TimeTrackerApi.prototype.addCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._mongodb.connect(_this._DB_PATH, function (connectionError, db) {
                var collection = db.collection('companies');
                if (connectionError) {
                    reject(connectionError);
                    db.close();
                }
                else {
                    collection.insert({ name: company.name }).then(function (response) {
                        db.close();
                        resolve(response);
                    }, function (error) {
                        db.close();
                        reject(error);
                    });
                }
            });
        });
    };
    TimeTrackerApi.prototype.addProject = function (company, project) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._mongodb.connect(_this._DB_PATH, function (connectionError, db) {
                if (connectionError) {
                    reject(connectionError);
                    db.close();
                }
                else {
                    var collection = db.collection('projects');
                    collection.insert({ companyId: company._id, name: project.name }).then(function (response) {
                        db.close();
                        resolve(response);
                    });
                }
            });
        });
    };
    TimeTrackerApi.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._mongodb.connect(_this._DB_PATH, function (connectionError, db) {
                var collection = db.collection('companies');
                if (connectionError) {
                    reject(connectionError);
                }
                else {
                    collection.find().toArray(function (queryError, docs) {
                        if (queryError) {
                            db.close();
                            reject(queryError);
                        }
                        else {
                            db.close();
                            resolve(docs);
                        }
                    });
                }
            });
        });
    };
    TimeTrackerApi.prototype.getProjectsByCompanyId = function (companyId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._mongodb.connect(_this._DB_PATH, function (connectionError, db) {
                var collection = db.collection('projects');
                if (connectionError) {
                    db.close();
                    reject(connectionError);
                }
                else {
                    collection.find({ companyId: companyId }).toArray(function (queryError, docs) {
                        resolve(docs);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
        });
    };
    return TimeTrackerApi;
}());
exports.TimeTrackerApi = TimeTrackerApi;
new TimeTrackerApi();
//# sourceMappingURL=timetracker-api.js.map