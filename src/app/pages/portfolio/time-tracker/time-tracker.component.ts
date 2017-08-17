import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Company, Project} from './classes/company';
import { TimeTrackerService } from './services/time-tracker.service';
import { MdDialog } from '@angular/material';
import { NewCompanyDialogComponent } from './dialogs/new-company-dialog/new-company-dialog.component';
import {NewProjectDialogComponent} from './dialogs/new-project-dialog/new-project-dialog.component';

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
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
  }
  addCompany(): void {
    const dialogRef = this._dialog.open(NewCompanyDialogComponent);
    dialogRef.afterClosed().subscribe( company => {
      this._timeTrackerService.addCompany(company).then( companies => {
        if (companies) {
          this.companies = companies;
        } else {
          alert('cant add company');
        }
      }, error => {
        alert(error.message);
      });
    });
  }
  addProject(): void {
    const dialogRef = this._dialog.open(NewProjectDialogComponent);
    dialogRef.afterClosed().subscribe( project => {
      this._timeTrackerService.addProject(new Company(), new Project()).then( something => {

      }, error => {
        alert(error.message);
      });
    });
  }
  changeTab(index: number): void {
    this.selectedTab = index;
  }

}
