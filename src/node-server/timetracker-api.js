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
        this._router.post('/add', function (request, response) {
            _this.addCompany(request.params.company).then(function (result) {
                response.json(result);
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
                    collection.insert(company).then(function (response) {
                        _this.getCompanies().then(function (companies) {
                            resolve(companies);
                        });
                        db.close();
                    }, function (error) {
                        db.close();
                        reject(error);
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
                    collection.distinct('name', {}).then(function (docs) {
                        db.close();
                        resolve(docs);
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