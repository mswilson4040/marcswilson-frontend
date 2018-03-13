import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactFormDialogComponent } from '../../shared-components/dialogs/contact-form-dialog/contact-form-dialog.component';
import { UIService } from '../../shared-services/ui.service';
import { MatDialog } from '@angular/material';
import fontawesome from '@fortawesome/fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands';
import faEnvelope from '@fortawesome/fontawesome-free-regular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _uiService: UIService, private _elementRef: ElementRef, private _titleService: Title) {
    fontawesome.library.add(faFacebook);
    fontawesome.library.add(faEnvelope);
    this._titleService.setTitle('Home');
  }

  ngOnInit() {
    this._uiService.scrollService.subscribe( evt => {

    });
  }
  navigate(url: string): void {
    window.open(url, '_blank');
  }
  launchContactForm(): void {
    const dialogRef = this._dialog.open(ContactFormDialogComponent, {});
    dialogRef.afterClosed().subscribe( info => {});
  }

}
