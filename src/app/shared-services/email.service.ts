import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class EmailService {

  constructor(private _http: Http) { }
  sendEmail(from: string, subject: string, message: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._http.post(`${environment.API_PATH}/email/sendemail`, {
        subject: subject,
        from: from,
        message: message
      }).subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  };

}
