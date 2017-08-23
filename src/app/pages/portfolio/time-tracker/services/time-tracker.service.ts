import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class TimeTrackerService {

  public API_PATH = `${environment.API_PATH}/timetracker`;

  constructor(private _http: Http) {

  }
}
