import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MailMessage } from '../models/mail-message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

  constructor(private _httpClient: HttpClient) { }
  sendEmail(mailMessage: MailMessage): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post(`${environment.API_PATH}/email/sendemail`, {
        subject: mailMessage.subject,
        from: mailMessage.from,
        to: mailMessage.to,
        message: mailMessage.message
      }).subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  };

}
