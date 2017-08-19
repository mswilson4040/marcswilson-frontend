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
var Entry = (function () {
    function Entry() {
        this.date = new Date();
        this.description = null;
        this.project = new Project();
    }
    return Entry;
}());
var Project = (function () {
    function Project(data) {
        this.name = null;
        this._id = null;
        this.companyId = null;
        if (data) {
            this.name = data.name;
            this._id = data._id;
            this.companyId = data.companyId;
        }
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=company.js.map