import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Database } from '../../../models/admin/database';
import { Collection } from '../../../models/admin/collection';

@Injectable()
export class DatabaseManagerService {
  private readonly API_PATH: string = environment.API_PATH;
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
  getCollections(database: Database): Promise<Collection[]> {
    return new Promise( (resolve, reject) => {
      this._httpClient.get<Collection[]>(`${this.API_PATH}/admin/databases/${database.name}/collections`).subscribe(
        _collections => {
        const cols = _collections.map( c => new Collection(c) );
        resolve(cols);
      }, error => {
        reject(error);
      });
    });
  }
  updateMlbStatsDb(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.post(`${this.API_PATH}/admin/databases/mlbstatsdb/update`, {}).subscribe( _result => {
        resolve(_result);
      }, error => {
        reject(error);
      });
    });
  }
}
