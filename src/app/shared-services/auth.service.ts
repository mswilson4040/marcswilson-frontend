import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private API_PATH = `${environment.API_PATH}/auth`;
  constructor(private _router: Router, private _httpClient: HttpClient) {

  }
  login(username: string, hash: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post(`${this.API_PATH}/login`, { username: username, hash: hash }).subscribe( _result => {
        resolve(_result);
      }, error => {
        reject(error);
      });
    });
  }

}
