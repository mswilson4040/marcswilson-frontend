import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Company } from '../classes/company';
import { TimeTrackerService } from '../services/time-tracker.service';
import { UIService } from '../../../../shared-services/ui.service';

@Component({
  selector: 'app-time-tracker-timesheet',
  templateUrl: './time-tracker-timesheet.component.html',
  styleUrls: ['./time-tracker-timesheet.component.scss']
})
export class TimeTrackerTimesheetComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  public activeCompany: Company = null;
  public selectedIndex = 0;
  constructor(private _timeTrackerService: TimeTrackerService, private _uiService: UIService) { }

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
