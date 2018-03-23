import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GeoLocationService {

  constructor(private _httpClient: HttpClient) { }

  async getLocationByCityAndState(city: string, state: string, id?: string) {
    const geolocation = await this._httpClient.get(`${environment.API_PATH}/geolocation/city/${city}/state/${state}`).toPromise();
    if (geolocation) {
      geolocation[ 'id' ] = id;
      return geolocation;
    }
    return null;
  }

}
