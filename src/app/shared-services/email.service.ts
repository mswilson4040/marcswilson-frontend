import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MailMessage } from '../models/mail-message';
import { HttpClient } from '@angular/common/http';
import { UIService } from './ui.service';

@Injectable()
export class EmailService {

  constructor(private _httpClient: HttpClient, private _uiService: UIService) { }
  sendEmail(mailMessage: MailMessage): Promise<any> {
    return new Promise( (resolve, reject) => {
      const overlayId = this._uiService.createOverlay(`Sending Email...`);
      this._httpClient.post(`${environment.API_PATH}/email/sendemail`, {
        subject: mailMessage.subject,
        from: mailMessage.from,
        to: mailMessage.to,
        message: mailMessage.message
      }).subscribe( data => {
        resolve(data);
        this._uiService.destroyOverlay(overlayId);
      }, error => {
        if (error.error) {
          reject(error.error);
        } else {
          reject( error );
        }
        this._uiService.destroyOverlay(overlayId);
      });
    });
  };

}
