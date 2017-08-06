"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailApi = (function () {
    function EmailApi() {
        var _this = this;
        this.express = null;
        this.router = null;
        this.nodemailer = null;
        this.aws = null;
        this.express = require('express');
        this.router = this.express.Router();
        this.nodemailer = require('nodemailer');
        this.aws = require('aws-sdk');
        this.router.post('/sendemail', function (request, response) {
            var params = request.params;
            var subject = params.subject;
            var from = params.from;
            var message = params.message;
            _this.sendEmail(subject, from, message).then(function (result) {
                response.json(result);
            }, function (error) {
                response.json(error);
            });
        });
        module.exports = this.router;
    }
    EmailApi.prototype.sendEmail = function (subject, from, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.aws.config.loadFromPath('aws.ses.config.example.json');
            var transporter = _this.nodemailer.createTransport({
                SES: new _this.aws.SES({
                    apiVersion: '2012-10-17'
                })
            });
            var mailOptions = {
                from: from,
                to: 'mwilson@marcswilson.com',
                subject: subject,
                text: message
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
            });
        });
    };
    return EmailApi;
}());
exports.EmailApi = EmailApi;
new EmailApi();
//# sourceMappingURL=email-api.js.map