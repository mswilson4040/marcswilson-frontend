import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private _http: Http) {

  }
  login(): Promise<any> {
    return new Promise( (resolve, reject) => {
      const url = `${environment.API_PATH}/auth/facebook`;
      this._http.get(url).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

}
