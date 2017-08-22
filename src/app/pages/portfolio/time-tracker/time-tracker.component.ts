import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Company } from './classes/company';
import { TimeTrackerService } from './services/time-tracker.service';
import { MdDialog } from '@angular/material';
import { NewCompanyDialogComponent } from './dialogs/new-company-dialog/new-company-dialog.component';
import { NewProjectDialogComponent } from './dialogs/new-project-dialog/new-project-dialog.component';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public selectedTab = 0;
  public activeCompany: Company = null;
  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog) { }

  ngOnInit() {
    this._timeTrackerService.companies$.subscribe( companies => {
      if (companies) {
        this.companies = companies;
      }
    }, error => {
      alert(error.message);
    });
    this._timeTrackerService.activeCompany$.subscribe( company => {
      if (company !== null) {
        this.activeCompany = company;
      }
    }, error => {
      alert(error.message);
    });
  }
  ngAfterViewInit(): void {
  }
  addCompany(): void {
    const dialogRef = this._dialog.open(NewCompanyDialogComponent);
    dialogRef.afterClosed().subscribe( company => {
      if (company) {
        this._timeTrackerService.addCompany(company).then(result => {
          if (!result) {
            alert('cant add company');
          }
        }, error => {
          alert(error.message);
        });
      }
    });
  }
  addProject(company: Company): void {
    const dialogRef = this._dialog.open(NewProjectDialogComponent);
    dialogRef.afterClosed().subscribe( project => {
      this._timeTrackerService.addProject(company, project).then( projects => {
        this.activeCompany.projects = projects;
        this._timeTrackerService.activeCompany = this.activeCompany;
      }, error => {
        alert(error.message);
      });
    });
  }
  changeTab(index: number): void {
    this.selectedTab = index;
  }
  expandProjects(company: Company) {
    if (this.activeCompany && company._id === this.activeCompany._id) {
      this.activeCompany = new Company();
    } else {
      this._timeTrackerService.getProjectsByCompany(company).then(projects => {
        company.projects = projects;
        this._timeTrackerService.activeCompany = company;
      });
    }
  }

}
