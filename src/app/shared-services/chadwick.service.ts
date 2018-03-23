import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ballpark } from '../models/ballpark';
import { GeoLocationService } from './geo-location.service';
import * as GeoJson from 'geojson';
import * as TopoJson from 'topojson';

@Injectable()
export class ChadwickService {

  constructor(private _httpClient: HttpClient, private _geoLocationService: GeoLocationService) { }

  async getSeasons(): Promise<string[]> {
    const seasons: string[] = await this._httpClient.get<string[]>(`${environment.API_PATH}/chadwick/seasons`).toPromise();
    return seasons;
  }
  async getBallparks(): Promise<Ballpark[]> {
    const ballparks: Ballpark[] = await this._httpClient.get<Ballpark[]>(`${environment.API_PATH}/chadwick/ballparks`).toPromise();
    return ballparks.map( b => new Ballpark(b) );
  }
  async createBallparkGeoJsonRequestSet(ballparks: Ballpark[]) {
    const promises = ballparks.map( b => this._geoLocationService.getLocationByCityAndState( b.city, b.state, b._id ) );
    let responses: any[] = await Promise.all( promises );
    responses = responses.filter( r => r );
    const requestSet = responses.map( r => {
      const park: Ballpark = ballparks.find( b => b._id === r.id );
      return { name: park.park.name, category: 'Ballpark', lat: r.latitude, lng: r.longitude };
    });
    const geo = this.getGeoJson(requestSet);
    return geo;
  }
  getGeoJson(geoJsonRequest) {
    const t = GeoJson['parse'](geoJsonRequest, { Point: [ 'lat', 'lng'] });
    return t;
  }
  getTopoJson(geojson) {
    const topology = TopoJson.topology({states: geojson});
    return topology;

  }
}
