import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {Company, Entry, Project} from '../../classes/company';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { ErrorDialogComponent } from '../../../../../shared-components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss'],
  providers: [TimeTrackerService]
})
export class EntryDialogComponent implements OnInit, AfterViewInit {

  public companies: Array<Company> = new Array<Company>();
  public selectedCompany: Company = null;
  public projects: Array<Project> = new Array<Project>();
  public entry: Entry = new Entry();
  public selectedProject: Project = null;

  constructor(private _dialogRef: MdDialogRef<EntryDialogComponent>, private _timeTrackerService: TimeTrackerService,
              private _dialog: MdDialog, private _changeDetectorRef: ChangeDetectorRef) {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
      if (this.selectedCompany && this.selectedCompany._id !== null) {
        this._timeTrackerService.getProjectsByCompany(this.selectedCompany).then( projects => {
          this.projects = projects;
        }, error => {
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      }
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.entry.date = this.entry.date === null ? new Date() : this.entry.date;
    this.entry.project = this.selectedProject;
    this._changeDetectorRef.detectChanges();

  }
  onCompanyChange(): void {
    this._timeTrackerService.getProjectsByCompany(this.selectedCompany).then( projects => {
      this.projects = projects;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
  closeDialog(): void {
    this.entry.project = this.projects.find( p => { return p._id === this.selectedProject._id; });
    this._dialogRef.close({entry: this.entry, company: this.selectedCompany});
  }
  cancel(): void {
    this._dialogRef.close(null);
  }
}
