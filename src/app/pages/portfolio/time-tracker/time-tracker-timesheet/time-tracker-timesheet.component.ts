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
  public selectedCompany: Company = new Company();
  constructor(private _timeTrackerService: TimeTrackerService, private _uiService: UIService) { }

  ngOnInit() {
    // TODO: Bug(?): Tabs don't show left/right shifters on load
    this._uiService.showOverlay('Fetching Companies...');
    this._timeTrackerService.companies$.subscribe( companies => {
      this.companies = companies;
      this._uiService.hideOverlay();
    }, error => {
      alert(error.message);
    });
  }
  ngAfterViewInit(): void {
  }
  addEntry(): void {
  }

}
