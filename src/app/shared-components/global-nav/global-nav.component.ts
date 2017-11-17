import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFormDialogComponent } from '../dialogs/contact-form-dialog/contact-form-dialog.component';
import { EmailService } from '../../shared-services/email.service';
import { AuthService } from '../../shared-services/auth.service';
import { AuthenticationResponse } from '../../shared-classes/authentication-response';
import { UIService } from '../../shared-services/ui.service';
import { MatDialog } from '@angular/material';

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
  public scrollY = 0;
  public navCollapsed = true;
  public about = false;
  public technologies = false;
  public experience = false;
  public portfolio = false;
  @Input() runAnimation = true;
  constructor(private _router: Router, private _dialog: MatDialog, private _emailService: EmailService,
              private _authService: AuthService, private _uiService: UIService, private _elementRef: ElementRef) {
    this.router = this._router;
  }

  ngOnInit() {
    const about = new ElementRef(document.getElementById('aboutSection'));
    const technologies = new ElementRef(document.getElementById('skillsSection'));
    const experience = new ElementRef(document.getElementById('experienceSection'));
    const portfolio = new ElementRef(document.getElementById('portfolioContainer'));
    this._authService.authWatch$.subscribe( auth => {
      this.authResponse = auth;
    });
    this._uiService.scrollService.subscribe( evt => {
      const isElementInView = this._uiService.isElementInView(this._elementRef);
      this.about = this._uiService.isElementInView(about);
      this.technologies = this._uiService.isElementInView(technologies);
      this.experience = this._uiService.isElementInView(experience);
      this.portfolio = this._uiService.isElementInView(portfolio);
      this.scrollY = window.scrollY;
      if (!isElementInView) {
        this.outOfView = true;
      } else {
        this.outOfView = false;
      }
    });
    document.onclick = this.collapseNav.bind(this);
  }
  openContactForm(): void {
    // const dialogRef = this._dialog.open(ContactFormDialogComponent);
    // dialogRef.afterClosed().subscribe(data => {
    //   data = data === 'true' ? true : false;
    //   if (data === true) {
    //     const componentInstance = dialogRef.componentInstance;
    //     const subject = componentInstance.subject;
    //     const from = componentInstance.from;
    //     const message = componentInstance.message;
    //     this._emailService.sendEmail(from, subject, message).then( result => {
    //       if (result.ok === true) {
    //         // TODO: show verification screen
    //       }
    //     }, error => {
    //       // TODO: display error
    //     });
    //   }
    // });
  }
  logout(): void {
    this._authService.logout();
    this._router.navigate(['/home']);
  }
  scrollTo(elementId: string) {
    if (this._router.url === '/home') {
      const el = document.querySelector(`#${elementId}`);
      el.scrollIntoView({ behavior: 'smooth' });
      this.navCollapsed = true;
    } else {
      this._router.navigate(['/home']).then( () => {
        this.scrollTo(elementId);
      });

    }
  }
  toggleNav(): void {
    this.navCollapsed = !this.navCollapsed;
  }
  collapseNav(evt: Event): void {
    const clickOutside = this._elementRef.nativeElement.contains(evt.target);
    if (!clickOutside) {
      this.navCollapsed = true;
    }
  }
  goHome(): void {
    if (this._router.url === '/home') {
      window.scrollTo({top: 0, behavior: 'smooth'})
    } else {
      this._router.navigate(['/home']);
    }
  }
}
