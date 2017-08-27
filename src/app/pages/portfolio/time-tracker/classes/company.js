"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company(company) {
        this.name = null;
        this._id = null;
        this.entries = new Array();
        this.projects = new Array();
        if (company) {
            this.name = company.name;
            this._id = company._id;
            this.entries = company.entries;
            this.projects = company.projects;
        }
    }
    return Company;
}());
exports.Company = Company;
var Project = (function () {
    function Project(data) {
        this.name = null;
        this._id = null;
        if (data) {
            this.name = data.name;
            this._id = data._id;
        }
    }
    return Project;
}());
exports.Project = Project;
var Entry = (function () {
    function Entry() {
        this.date = null;
        this.project = new Project();
        this.description = null;
        this.hours = null;
    }
    return Entry;
}());
exports.Entry = Entry;
//# sourceMappingURL=company.js.map