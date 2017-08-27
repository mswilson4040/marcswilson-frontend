import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Company } from './classes/company';
import { TimeTrackerService } from './services/time-tracker.service';
import { MdDialog } from '@angular/material';
import {CompanyDialogComponent} from './dialogs/company-dialog/company-dialog.component';
import {ProjectDialogComponent} from './dialogs/project-dialog/project-dialog.component';
import {ErrorDialogComponent} from '../../../shared-components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public selectedTab = 0;
  public selectedCompany: Company = new Company();
  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
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
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      }
    });
  }
  addProject(): void {
    const dialogRef = this._dialog.open(ProjectDialogComponent);
    dialogRef.afterClosed().subscribe( project => {
      if (project) {
        this._timeTrackerService.addProject(this.selectedCompany, project).then( projects => {
          const company = this.companies.find( c => { return c._id === this.selectedCompany._id; });
          company.projects = projects;
        }, error => {
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      }
    });
  }
  toggleCollapse(company: Company): void {
    if (this.selectedCompany._id === company._id) {
      this.selectedCompany = new Company();
    } else {
      this.selectedCompany = company;
    }
  }
}
