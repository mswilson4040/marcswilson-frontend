import { Component, OnInit } from '@angular/core';
import 'hammerjs';

import { MatDialog, MatSidenav } from '@angular/material';
import { Navbar } from '../models/navbar';
import { UIService } from '../shared-services/ui.service';
import { ContactFormDialogComponent } from '../shared-components/dialogs/contact-form-dialog/contact-form-dialog.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  public navbar: Navbar = new Navbar();
  constructor(private _uiService: UIService, private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }
  onNavToggle(state: boolean, sidenav: MatSidenav): void {
    if (state) {
      sidenav.open();
    } else {
      sidenav.close();
    }
  }
  onScroll(evt): void {
    this._uiService.onScroll(evt);
  }
  launchContactForm(): void {
    const dialogRef = this._matDialog.open(ContactFormDialogComponent, {});
    dialogRef.afterClosed().subscribe( info => {});
  }

}
