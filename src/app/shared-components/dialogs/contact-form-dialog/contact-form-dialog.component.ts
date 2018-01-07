import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../shared-services/email.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MailMessage } from '../../../models/mail-message';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public mailMessage: MailMessage = new MailMessage();
  public fromCtrl: FormControl;
  public subjectCtrl: FormControl;
  public messageCtrl: FormControl;
  constructor(private _matDialogRef: MatDialogRef<ContactFormDialogComponent>, private _emailService: EmailService,
              private _matDialog: MatDialog) {
    this.fromCtrl = new FormControl('', [ Validators.required] );
    this.subjectCtrl = new FormControl('', [ Validators.required] );
    this.messageCtrl = new FormControl('', [ Validators.required] );
  }

  ngOnInit() {
    this.mailMessage.to = environment.myEmail;
  }
  sendEmail(): void {
    if (!this.fromCtrl.hasError('required') && !this.subjectCtrl.hasError('required') && !this.messageCtrl.hasError('required')) {
      this._emailService.sendEmail( this.mailMessage ).then( result => {
        this._matDialogRef.close();
      }, error => {
        this._matDialog.open( ErrorDialogComponent, { data: error } );
        this._matDialogRef.close();
      } );
    } else {
      this.fromCtrl.markAsTouched();
      this.subjectCtrl.markAsTouched();
      this.messageCtrl.markAsTouched();
    }
  }
  cancel(): void {
    this._matDialogRef.close();
  }
}
