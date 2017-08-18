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
            this.projects.push(new Project());
            this.projects.push(new Project());
            this.projects.push(new Project());
            this.projects.push(new Project());
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
    function Project() {
        this.name = null;
        this._id = null;
        this.companyId = null;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=company.js.map