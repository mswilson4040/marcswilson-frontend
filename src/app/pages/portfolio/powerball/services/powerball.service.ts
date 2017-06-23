import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Powerball} from '../classes/powerball';
import {PowerballData} from '../classes/powerball-data';

@Injectable()
export class PowerballService {
  public API_PATH: string = null;

  constructor(private _http: Http) {
    const loc = window.location.origin;
    if (loc.indexOf('localhost') > -1) {
      this.API_PATH = 'http://localhost:3000/api/powerball/';
    } else {
      this.API_PATH = 'http://marcswilson.com/api/powerball/';
    }
  }

  getPowerball(): Promise<PowerballData> {
    return new Promise((resolve, reject) => {
      this._http.get(this.API_PATH + 'powerball').subscribe(data => {
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
