import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/admin/user';

@Injectable()
export class AuthService {
  private API_PATH = `${environment.API_PATH}/auth`;
  public user: User = null;
  public onAuthentication: EventEmitter<User> = new EventEmitter<User>();
  constructor(private _router: Router, private _httpClient: HttpClient) {}
  login(username: string, hash: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post<User>(`${this.API_PATH}/login`, { username: username, hash: hash }).subscribe( _user => {
        this.user = new User(_user);
        localStorage.setItem(environment.LOCAL_STORAGE.userLookupKey, this.user.stringify());
        this.onAuthentication.emit(this.user);
        resolve(this.user);
      }, error => {
        reject(error);
      });
    });
  }
  logout(): void {
    this.user = null;
    this.onAuthentication.emit(this.user);
  }
  isAuthenticated(): User {
    return this.user;
  }

}
