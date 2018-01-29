import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../../models/admin/user';

@Injectable()
export class UserManagerService {
  private _API_PATH = `${environment.API_PATH}/admin/users`;
  constructor(private _httpClient: HttpClient) { }

  createUser(user: User): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post(`${this._API_PATH}/create`, user).subscribe( _users => {
        resolve(_users);
      }, error => {
        reject(error);
      });
    });
  }
}
