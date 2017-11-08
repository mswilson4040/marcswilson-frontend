import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { MailMessage } from '../shared-classes/mail-message';

@Injectable()
export class EmailService {

  constructor(private _http: Http) { }
  sendEmail(mailMessage: MailMessage): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${environment.API_PATH}/email/sendemail`, {
        subject: mailMessage.subject,
        from: mailMessage.from,
        message: mailMessage.message
      }).subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  };

}
