import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { TimeTrackerService } from '../services/time-tracker.service';
import {Company, Entry, Project} from '../classes/company';
import { MdDialog} from '@angular/material';
import { EntryDialogComponent } from '../dialogs/entry-dialog/entry-dialog.component';
import { ErrorDialogComponent } from '../../../../shared-components/error-dialog/error-dialog.component';
import {ConfirmDialogComponent} from '../../../../shared-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-time-tracker-timesheet',
  templateUrl: './time-tracker-timesheet.component.html',
  styleUrls: ['./time-tracker-timesheet.component.scss']
})
export class TimeTrackerTimesheetComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public companies: Array<Company> = new Array<Company>();
  public currentDate: Date = new Date();
  public selectedTabIndex = 0;
  public selectedCompany: Company = new Company();
  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog) {
  }

  ngOnInit() {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
  }
  addNewEntry(): void {
    const dialogRef = this._dialog.open(EntryDialogComponent, { height: '60%', width: '30%'});
    dialogRef.componentInstance.selectedCompany = this.selectedCompany;
    dialogRef.componentInstance.selectedProject = new Project();
    dialogRef.afterClosed().subscribe( resultObj => {
      if (resultObj) {
        this._timeTrackerService.addEntry(resultObj.company, resultObj.entry).then( entries => {
          if (entries) {
            this.selectedCompany.entries = entries;
          }
        });
      } else {

      }
    });
  }
  onCompanyChange(): void {
    this._timeTrackerService.getEntriesByCompany(this.selectedCompany).then( entries => {
      this.selectedCompany.entries = entries;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
  editEntry(entry: Entry): void {
    const dialogRef = this._dialog.open(EntryDialogComponent, { height: '60%', width: '30%'});
    dialogRef.componentInstance.entry = entry;
    dialogRef.componentInstance.selectedCompany = this.selectedCompany;
    dialogRef.componentInstance.selectedProject = entry.project;
    dialogRef.afterClosed().subscribe( resultObj => {
      this._timeTrackerService.updateEntry(resultObj.company, resultObj.entry).then( entries => {
        if (entries) {
          this.selectedCompany.entries = entries;
        }
      }, error => {
        const edr = this._dialog.open(ErrorDialogComponent);
        edr.componentInstance.error = error;
      });
    });
  }
  deleteEntry(entry: Entry): void {
    const cdr = this._dialog.open(ConfirmDialogComponent, { height: '15%', width: '25%'});
    cdr.afterClosed().subscribe( result => {
      if (result) {
        this._timeTrackerService.deleteEntry(entry, this.selectedCompany).then( entries => {
          if (entries) {
            this.selectedCompany.entries = entries;
          }
        }, error => {
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      }
    });

  }
}
