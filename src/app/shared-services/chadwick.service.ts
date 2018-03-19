import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ChadwickService {

  constructor(private _httpClient: HttpClient) { }

  async getSeasons() {
    const seasons = await this._httpClient.get<string[]>(`${environment.API_PATH}/chadwick/seasons`).toPromise();
    return seasons;
  }
}
