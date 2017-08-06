import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {ContactFormDialogComponent} from '../../shared-components/contact-form-dialog/contact-form-dialog.component';
import {EmailService} from '../../shared-services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MdDialog, private _emailService: EmailService) { }

  ngOnInit() {
    $('#firstName').addClass('first-name-width', 500);
    $('.hidden-text').delay(1000).show('slide', {direction: 'left'}, 500, (e) => {
      $('#coverImage').fadeIn();
      $('#underline').delay(500).animate({backgroundColor: 'white'}, 500);
      $('#welcomeScreen').animate({color: 'white'}, 500);
    });
  }
  openContactForm(): void {
    const dialogRef = this._dialog.open(ContactFormDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      data = data === 'true' ? true : false;
      if (data === true) {
        const componentInstance = dialogRef.componentInstance;
        const subject = componentInstance.subject;
        const from = componentInstance.from;
        const message = componentInstance.message;
        this._emailService.sendEmail(from, subject, message).then( result => {
            alert(result);
        }, error => {
          alert('send email error');
        });
      }
    });
  }

}
