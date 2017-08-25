import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Company } from './classes/company';
import { TimeTrackerService } from './services/time-tracker.service';
import { MdDialog } from '@angular/material';
import {CompanyDialogComponent} from './dialogs/company-dialog/company-dialog.component';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public selectedTab = 0;

  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
  }
  changeTab(index: number): void {
    this.selectedTab = index;
  }
  addCompany(): void {
    const dialogRef = this._dialog.open(CompanyDialogComponent);
    dialogRef.afterClosed().subscribe( company => {
      if (company) {
        this._timeTrackerService.addCompany(company).then( companies => {
          this.companies = companies;
        }, error => {
          alert(error.message);
        });
      }
    });
  }
}
