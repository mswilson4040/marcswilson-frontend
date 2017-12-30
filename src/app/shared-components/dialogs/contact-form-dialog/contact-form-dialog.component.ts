import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../shared-services/email.service';
import { UIService } from '../../../shared-services/ui.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MailMessage } from '../../../models/mail-message';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public mailMessage: MailMessage = new MailMessage();
  constructor(private _dialogRef: MatDialogRef<ContactFormDialogComponent>, private _emailService: EmailService,
              private _uiService: UIService, private _matDialog: MatDialog) { }

  ngOnInit() {
    this.mailMessage.to = environment.myEmail;
  }
  sendEmail(): void {
    this._uiService.showOverlay(`Sending Email...`);
    this._emailService.sendEmail(this.mailMessage).then( result => {
      this._uiService.hideOverlay();
      this._dialogRef.close();
    }, error => {
      this._uiService.hideOverlay();
      this._matDialog.open(ErrorDialogComponent, { data: error });
      this._dialogRef.close();
    });
  }
  cancel(): void {

  }
}
