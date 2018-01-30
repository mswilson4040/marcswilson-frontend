import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../../models/admin/user';
import { UIService } from '../../../shared-services/ui.service';

@Injectable()
export class UserManagerService {
  private _API_PATH = `${environment.API_PATH}/admin`;
  constructor(private _httpClient: HttpClient, private _uiService: UIService) { }

  createUser(user: User): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post<User[]>(`${this._API_PATH}/users/create`, user).subscribe( _users => {
        const users = _users.map( u => new User(u) );
        resolve(users);
      }, error => {
        reject(error);
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
