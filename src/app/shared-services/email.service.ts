import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MailMessage } from '../models/mail-message';
import { HttpClient } from '@angular/common/http';
import { UIService } from './ui.service';

@Injectable()
export class EmailService {

  constructor(private _httpClient: HttpClient, private _uiService: UIService) { }

  async sendEmail(email: MailMessage): Promise<boolean> {
    // TODO: Needs some sort of way to relay if the email was sent or not
    const overlayId = this._uiService.createOverlay('Sending Email...');
    await this._httpClient.post(`${environment.API_PATH}/email/sendemail`, email).toPromise();
    this._uiService.destroyOverlay(overlayId);
    return true;
  }
}
