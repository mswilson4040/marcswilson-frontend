import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Company } from '../classes/company';
import { TimeTrackerService } from '../services/time-tracker.service';
import { UIService } from '../../../../shared-services/ui.service';
import { MdDialog } from '@angular/material';
import { NewEntryDialogComponent } from '../dialogs/new-entry-dialog/new-entry-dialog.component';

@Component({
  selector: 'app-time-tracker-timesheet',
  templateUrl: './time-tracker-timesheet.component.html',
  styleUrls: ['./time-tracker-timesheet.component.scss']
})
export class TimeTrackerTimesheetComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public activeCompany: Company = new Company();
  public selectedIndex = 0;
  constructor(private _timeTrackerService: TimeTrackerService, private _uiService: UIService,
              private _dialog: MdDialog) { }

  ngOnInit() {
    // TODO: Bug(?): Tabs don't show left/right shifters on load
    this._timeTrackerService.companies$.subscribe( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
    this._timeTrackerService.activeCompany$.subscribe( company => {
      if (company) {
        this.activeCompany = company;
        const index = this.companies.findIndex( c => { return c._id === this.activeCompany._id; });
        this.changeTab(index);
      }
    });
  }
  ngAfterViewInit(): void {
  }
  addEntry(): void {
    const dialogRef = this._dialog.open(NewEntryDialogComponent, {
      height: '40%',
      width: '30%'
    });
    dialogRef.componentInstance.projects = this.activeCompany.projects;
    dialogRef.componentInstance.entry.companyId = this.activeCompany._id;
    dialogRef.afterClosed().subscribe( entry => {
      if (entry) {
        this._timeTrackerService.addEntry(entry).then(entries => {
          this.activeCompany.entries = entries;
        }, error => {
          alert(error.message);
        });
      }
    });
  }
  changeTab(index: number) {
    this.selectedIndex = index;
  }
  onTabChange(evt): void {
    if (evt) {
      try {
        const company = this.companies[ evt.index ];
        this._timeTrackerService.activeCompany = company;
      } catch (ex) {
      }
    }
  }

}
