"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company(data) {
        this.name = null;
        this.entries = new Array();
        if (data) {
            this.name = data.name;
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
    }
    return Project;
}());
//# sourceMappingURL=company.js.map