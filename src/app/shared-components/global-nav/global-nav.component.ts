import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';
import { MdDialog } from '@angular/material';
import { EmailService } from '../../shared-services/email.service';
import { AuthService } from '../../shared-services/auth.service';
import { AuthenticationResponse } from '../../shared-classes/authentication-response';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  public path: string = null;
  public authResponse: AuthenticationResponse = new AuthenticationResponse();
  public router: Router;
  public outOfView = false;
  constructor(private _router: Router, private _dialog: MdDialog, private _emailService: EmailService,
              private _authService: AuthService, private _uiService: UIService, private _elementRef: ElementRef) {
    this.router = this._router;
  }

  ngOnInit() {
    this._authService.authWatch$.subscribe( auth => {
      this.authResponse = auth;
    });
    this._uiService.scrollService.subscribe( evt => {
      const isElementInView = this._uiService.isElementInView(this._elementRef);
      if (!isElementInView) {
        this.outOfView = true;
      } else {
        this.outOfView = false;
      }
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
          if (result.ok === true) {
            // TODO: show verification screen
          }
        }, error => {
          // TODO: display error
        });
      }
    });
  }
  logout(): void {
    this._authService.logout();
    this._router.navigate(['/home']);
  }
  scrollTo(elementId: string) {
    const el = document.querySelector(`#${elementId}`);
    const y = el.clientHeight;
    window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
  }
}
