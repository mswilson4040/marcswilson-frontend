"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company(data) {
        this.name = null;
        this._id = null;
        this.projects = new Array();
        if (data) {
            this.name = data.name;
            this._id = data._id;
            if (data.hasOwnProperty('projects')) {
                this.projects = data.projects.map(function (p) {
                    return new Project(p);
                });
            }
        }
    }
    return Company;
}());
exports.Company = Company;
var Project = (function () {
    function Project(data) {
        this.name = null;
        this._id = null;
        this.companyId = null;
        this.entries = new Array();
        if (data) {
            this.name = data.name;
            this._id = data._id;
            this.companyId = data.companyId;
            this.entries = data.entries;
        }
    }
    return Project;
}());
exports.Project = Project;
var Entry = (function () {
    function Entry(data) {
        this.date = null;
        this.projectId = null;
        this.companyId = null;
        this.description = null;
        this.timeSpent = null;
        if (data) {
            this.date = data.date;
            this.projectId = data.projectId;
            this.description = data.description;
            this.timeSpent = data.timeSpent;
        }
    }
    return Entry;
}());
exports.Entry = Entry;
//# sourceMappingURL=company.js.map