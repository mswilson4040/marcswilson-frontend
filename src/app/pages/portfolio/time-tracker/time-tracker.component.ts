import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Company} from './classes/company';
import {TimeTrackerService} from './services/time-tracker.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit, AfterViewInit {
  public companies: Array<Company> = new Array<Company>();
  constructor(private _timeTrackerService: TimeTrackerService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
  }

}
