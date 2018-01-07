import { Component, ElementRef, OnInit } from '@angular/core';
import { ContactFormDialogComponent } from '../../shared-components/dialogs/contact-form-dialog/contact-form-dialog.component';
import { UIService } from '../../shared-services/ui.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog, private _uiService: UIService, private _elementRef: ElementRef) {
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
