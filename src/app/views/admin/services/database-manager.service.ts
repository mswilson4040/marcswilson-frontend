import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Database } from '../../../models/admin/database';

@Injectable()
export class DatabaseManagerService {

  constructor(private _httpClient: HttpClient) { }

  getDatabases(): Promise<Database[]> {
    return new Promise( (resolve, reject) => {
      this._httpClient.get<Database[]>(`${environment.API_PATH}/admin/databases`).subscribe( _databases => {
        const dbs = _databases.map( d => new Database(d) );
        resolve(dbs);
      }, error => {
        reject(error);
      });
    });
  }
}
