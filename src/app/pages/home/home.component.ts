import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ContactFormDialogComponent } from '../../shared-components/contact-form-dialog/contact-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MdDialog) { }

  ngOnInit() {
  }
  navigate(url: string): void {
    window.open(url, '_blank');
  }
  launchContactForm(): void {
    this._dialog.open(ContactFormDialogComponent);
  }

}
