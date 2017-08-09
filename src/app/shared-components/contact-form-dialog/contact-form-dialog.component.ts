import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  public subject: string = null;
  public from: string = null;
  public message: string = null;
  constructor(private _dialogRef: MdDialogRef<ContactFormDialogComponent>) { }

  ngOnInit() {
  }

}
