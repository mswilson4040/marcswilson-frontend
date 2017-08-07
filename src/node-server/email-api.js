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
            var body = request.body;
            var subject = body.subject;
            var from = body.from;
            var message = body.message;
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
            _this.aws.config = {
                accessKeyId: process.env.AWS_ACCESS_ID,
                secretAccessKey: process.env.AWS_ACCESS_KEY,
                region: 'us-east-1'
            };
            var transporter = _this.nodemailer.createTransport({
                SES: new _this.aws.SES({
                    apiVersion: '2012-10-17'
                })
            });
            var mailOptions = {
                from: 'mwilson@marcswilson.com',
                to: 'mwilson@marcswilson.com',
                subject: subject,
                text: "Message from " + from + " \n " + message
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