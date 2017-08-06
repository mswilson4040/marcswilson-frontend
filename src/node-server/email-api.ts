export class EmailApi {
  public express: any = null;
  public router: any = null;
  public nodemailer: any = null;
  public aws: any = null;

  constructor() {
    this.express = require('express');
    this.router = this.express.Router();
    this.nodemailer = require('nodemailer');
    this.aws = require('aws-sdk');
    this.router.post('/sendemail', (request, response) => {
      const body = request.body;
      const subject = body.subject;
      const from = body.from;
      const message = body.message;
      this.sendEmail(subject, from, message).then( result => {
        response.json(result);
      }, error => {
        response.json(error);
      });
    });
    module.exports = this.router;

  }
  sendEmail(subject: string, from: string, message: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      // this.aws.config.loadFromPath('aws.ses.config.example.json');

      this.aws.config = {
        accessKeyId: process.env.AWS_ACCESS_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY,
        region: 'us-east-1'
      };
      const transporter = this.nodemailer.createTransport({
        SES: new this.aws.SES({
          apiVersion: '2012-10-17'
        })
      });
      const mailOptions = {
        from: from,
        to: 'mwilson@marcswilson.com',
        subject: subject,
        text: message
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}
new EmailApi();
