import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../shared-services/email.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MailMessage } from '../../../models/mail-message';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageBreakpoints } from '../../../enums/page-breakpoints.enum';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public mailMessage: MailMessage = new MailMessage();
  public fromCtrl: FormControl;
  public subjectCtrl: FormControl;
  public editor: any = null;
  constructor(private _matDialogRef: MatDialogRef<ContactFormDialogComponent>, private _emailService: EmailService,
              private _matDialog: MatDialog, private _breakPointObserver: BreakpointObserver) {
    this.fromCtrl = new FormControl('', [ Validators.required] );
    this.subjectCtrl = new FormControl('', [ Validators.required] );
  }

  ngOnInit() {
    this.mailMessage.to = environment.myEmail;
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

    ClassicEditor.create( document.querySelector( '#editor') ).then( _editor => {
      this.editor = _editor;
    });

  }
  sendEmail(): void {
    if (!this.fromCtrl.hasError('required') && !this.subjectCtrl.hasError('required')) {
      this.mailMessage.message = this.editor.getData();
      this._emailService.sendEmail( this.mailMessage ).then( result => {
        this._matDialogRef.close();
      }, error => {
        this._matDialog.open( ErrorDialogComponent, { data: error } );
        this._matDialogRef.close();
      } );
    } else {
      this.fromCtrl.markAsTouched();
      this.subjectCtrl.markAsTouched();
    }
  }
  cancel(): void {
    this._matDialogRef.close();
  }
}
