import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Database } from '../../../models/admin/database';
import { Collection } from '../../../models/admin/collection';
import { UIService } from '../../../shared-services/ui.service';

@Injectable()
export class DatabaseManagerService {
  private readonly API_PATH: string = environment.API_PATH;
  constructor(private _httpClient: HttpClient, private _uiService: UIService) { }

  getDatabases(): Promise<Database[]> {
    const overlayId = this._uiService.createOverlay(`Getting Databases...`);
    return new Promise( (resolve, reject) => {
      this._httpClient.get<Database[]>(`${environment.API_PATH}/admin/databases`).subscribe( _databases => {
        const dbs = _databases.map( d => new Database(d) );
        resolve(dbs);
        this._uiService.destroyOverlay(overlayId);
      }, error => {
        reject(error);
        this._uiService.destroyOverlay(overlayId);
      });
    });
  }
  getCollections(database: Database): Promise<Collection[]> {
    const overlayId = this._uiService.createOverlay(`Getting collections for ${database.name}...`);
    return new Promise( (resolve, reject) => {
      this._httpClient.get<Collection[]>(`${this.API_PATH}/admin/databases/${database.name}/collections`).subscribe(
        _collections => {
        const cols = _collections.map( c => new Collection(c) );
        resolve(cols);
          this._uiService.destroyOverlay(overlayId);
      }, error => {
        reject(error);
          this._uiService.destroyOverlay(overlayId);
      });
    });
  }
  getCollectionData(database: Database, collection: Collection): Promise<any> {
    return new Promise( (resolve, reject) => {
      this._httpClient.get(`${this.API_PATH}/admin/databases/${database.name}/${collection.name}`).subscribe( _records => {
        resolve(_records);
      }, error => {
        reject(error);
      });
    });
  }
  createDatabase(name: string): Promise<any> {
    const overlayId = this._uiService.createOverlay(`Creating ${name}...`);
    return new Promise( (resolve, reject) => {
      this._httpClient.post(`${this.API_PATH}/admin/databases/create/${name}`, {}).subscribe( _result => {
        this.getDatabases().then( _databases => {
          resolve(_databases);
          this._uiService.destroyOverlay(overlayId);
        }, error => {
          reject(error);
          this._uiService.destroyOverlay(overlayId);
        });
      }, error => {
        reject(error);
        this._uiService.destroyOverlay(overlayId);
      });
    });
  }
}
