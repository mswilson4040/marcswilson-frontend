import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Powerball} from '../classes/powerball';
import {PowerballData} from '../classes/powerball-data';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class PowerballService {
  public API_PATH: string = null;

  constructor(private _http: Http) {
  }

  getPowerball(): Promise<PowerballData> {
    return new Promise((resolve, reject) => {
      this._http.get(`${environment.API_PATH}/powerball/numbers`).subscribe(data => {
        const res = JSON.parse(data[ '_body' ]);
        const ret = new PowerballData();
        for (let i = 0; i < res.length; i++) {
          ret.addDrawing(new Powerball(res[i]));
        }
        resolve(ret);
      });
    });
  }
}
