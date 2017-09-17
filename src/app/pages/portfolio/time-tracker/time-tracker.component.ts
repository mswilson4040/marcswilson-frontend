import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Company } from './classes/company';
import { TimeTrackerService } from './services/time-tracker.service';
import { MdDialog } from '@angular/material';
import { CompanyDialogComponent } from './dialogs/company-dialog/company-dialog.component';
import { ProjectDialogComponent } from './dialogs/project-dialog/project-dialog.component';
import { ErrorDialogComponent } from '../../../shared-components/error-dialog/error-dialog.component';
import { AuthService } from '../../../shared-services/auth.service';
import { LoginDialogComponent } from '../../../shared-components/login-dialog/login-dialog.component';
import { AuthenticationResponse } from '../../../shared-classes/authentication-response';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public selectedTab = 0;
  public selectedCompany: Company = new Company();
  public authResponse: AuthenticationResponse = new AuthenticationResponse();
  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog,
              private _authService: AuthService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    setTimeout( () => {
      this.authResponse = this._authService.isAuthenticated();
      if (this.authResponse) {
        this._timeTrackerService.getCompanies(this.authResponse.sub).then( companies => {
          this.companies = companies;
        }, error => {
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      } else {
        const dialogRef = this._dialog.open(LoginDialogComponent, { height: '20%', width: '20%' });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this._authService.login('/timetracker');
          }
        });
      }
    });
  }
  changeTab(index: number): void {
    this.selectedTab = index;
  }
  addCompany(): void {
    const dialogRef = this._dialog.open(CompanyDialogComponent);
    dialogRef.componentInstance.authResponse = this.authResponse;
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
      this._timeTrackerService.getProjectsByCompany(company).then( projects => {
        company.projects = projects;
        this.selectedCompany = company;
      }, error => {
        const edr = this._dialog.open(ErrorDialogComponent);
        edr.componentInstance.error = error;
      });
    }
  }
}
