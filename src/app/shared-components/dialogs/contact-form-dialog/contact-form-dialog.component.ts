import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../shared-services/email.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MailMessage } from '../../../models/mail-message';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageBreakpoints } from '../../../enums/page-breakpoints.enum';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public mailMessage: MailMessage = new MailMessage();
  public contactForm: FormGroup;
  constructor(private _matDialogRef: MatDialogRef<ContactFormDialogComponent>, private _emailService: EmailService,
              private _matDialog: MatDialog, private _breakPointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.mailMessage.to = environment.myEmail;
    this.contactForm = new FormGroup({
      to: new FormControl(this.mailMessage.to),
      from: new FormControl(this.mailMessage.from, [ Validators.required ]),
      subject: new FormControl(this.mailMessage.subject, [ Validators.required ]),
      message: new FormControl(this.mailMessage.message, [ Validators.required ])
    });
    if (this._breakPointObserver.isMatched(PageBreakpoints.ExtraLarge)) {
      this._matDialogRef.updateSize('25%', 'auto');
    }
    if (this._breakPointObserver.isMatched(PageBreakpoints.Large)) {
      this._matDialogRef.updateSize('35%', 'auto');
    }
    if (this._breakPointObserver.isMatched(PageBreakpoints.Medium)) {
      this._matDialogRef.updateSize('45%', 'auto');
    }
    if (this._breakPointObserver.isMatched(PageBreakpoints.Small)) {
      this._matDialogRef.updateSize('55%', 'auto');
    }
    if (this._breakPointObserver.isMatched(PageBreakpoints.ExtraSmall)) {
      this._matDialogRef.updateSize('90%', 'auto');
    }

  }
  async sendEmail() {
    if (this.contactForm.valid) {
      const email: MailMessage = new MailMessage(this.contactForm.value);
      const response = await this._emailService.sendEmail(email);
      this._matDialogRef.close();
    }
  }
  cancel(): void {
    this._matDialogRef.close();
  }
}
