import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DatabaseManagerService {

  constructor(private _httpClient: HttpClient) { }

  getDatabases(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.get(`${environment.API_PATH}/admin/databases`).subscribe( _databases => {
        resolve(_databases);
      }, error => {
        reject(error);
      })
    });
  }

}
