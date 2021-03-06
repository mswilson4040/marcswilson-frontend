import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/admin/user';
import { UIService } from './ui.service';
import { environment } from '../../environments/environment';

@Injectable()
export class UserManagerService {
  private _API_PATH = `${environment.API_PATH}/admin`;
  constructor(private _httpClient: HttpClient, private _uiService: UIService) { }

  async createUser(user: User): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post<User>(`${this._API_PATH}/users/create`, user).subscribe( _user => {
        resolve(new User(user));
      }, error => {
        reject(error);
      });
    });
  }
  async deleteUser(user: User): Promise<any> {
    const overlayId = this._uiService.createOverlay(`Deleting ${user.name}...`);
    return new Promise( (resolve, reject) => {
      this._httpClient.delete(`${this._API_PATH}/users/delete/${user._id}`).subscribe( _result => {
        resolve(_result);
        this._uiService.destroyOverlay(overlayId);
      }, error => {
        reject(error);
        this._uiService.destroyOverlay(overlayId);
      });
    });
  }
  getUsers(): Promise<User[]> {
    const overlayId = this._uiService.createOverlay(`Fetching Users...`);
    return new Promise( (resolve, reject) => {
      this._httpClient.get<User[]>(`${this._API_PATH}/users`).subscribe( _users => {
        const users = _users.map( u => new User(u) );
        resolve(users);
        this._uiService.destroyOverlay(overlayId);
      }, error => {
        reject(error);
        this._uiService.destroyOverlay(overlayId);
      });
    });
  }
}
