import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public subject: string = 'test dubject';
  public from: string = 'mwilson@marcswilson.com';
  public message: string = 'message';
  constructor(private _dialogRef: MdDialogRef<ContactFormDialogComponent>) { }

  ngOnInit() {
  }

}
