import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../shared-services/email.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MailMessage } from '../../../models/mail-message';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public mailMessage: MailMessage = new MailMessage();
  constructor(private _matDialogRef: MatDialogRef<ContactFormDialogComponent>, private _emailService: EmailService,
              private _matDialog: MatDialog) { }

  ngOnInit() {
    this.mailMessage.to = environment.myEmail;
  }
  sendEmail(): void {
    this._emailService.sendEmail(this.mailMessage).then( result => {
      this._matDialogRef.close();
    }, error => {
      this._matDialog.open(ErrorDialogComponent, { data: error });
      this._matDialogRef.close();
    });
  }
  cancel(): void {
    this._matDialogRef.close();
  }
}
