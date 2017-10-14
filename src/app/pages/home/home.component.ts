import { Component, ElementRef, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ContactFormDialogComponent } from '../../shared-components/contact-form-dialog/contact-form-dialog.component';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MdDialog, private _uiService: UIService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this._uiService.scrollService.subscribe( evt => {

    });
  }
  navigate(url: string): void {
    window.open(url, '_blank');
  }
  launchContactForm(): void {
    this._dialog.open(ContactFormDialogComponent);
  }

}
