// https://bl.ocks.org/mbostock/4408297

import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../shared-services/chadwick.service';
import { UIService } from '../../shared-services/ui.service';
import { HttpClient } from '@angular/common/http';
import { GeoLocationService } from '../../shared-services/geo-location.service';
import * as d3 from 'd3';
import * as topojson from 'topojson/dist/topojson.js';

@Component({
  selector: 'app-mlbstats-explorer',
  templateUrl: './mlbstats-explorer.component.html',
  styleUrls: ['./mlbstats-explorer.component.scss'],
  providers: [ ChadwickService, GeoLocationService ]
})
export class MlbstatsExplorerComponent implements OnInit {

  constructor(private _chadwickService: ChadwickService, private _uiService: UIService, private _httpClient: HttpClient,
              private _geoLocationService: GeoLocationService) { }

  async ngOnInit() {

    const ballparks = await this._chadwickService.getBallparks();
    const geoReq = await this._chadwickService.createBallparkGeoJsonRequestSet(ballparks.filter( b => {
        return (b) && ( b.state && b.state !== '' ) && ( b.city && b.city !== '' );
      }
    ));
    const topoJsonBallparks = topojson.topology({ballparks: geoReq});

    if (true) {
      const height = 960;
      const width = 500;
      const projection = d3.geoAlbers();
      const path = d3.geoPath().projection(projection).pointRadius(2.5);
      const svg = d3.select('svg')
        .attr('width', width)
        .attr('height', height);
      const us: any = await this._httpClient.get('https://bl.ocks.org/mbostock/raw/4090846/us.json').toPromise();
      svg.append('path')
        .datum(topojson.feature(us, us.objects.land))
        .attr('class', 'land')
        .attr('d', path);

      svg.append('path')
        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b ))
        .attr('class', 'states')
        .attr('d', path);
      console.log(topoJsonBallparks);
      svg.append('path')
        .datum(topojson.feature(topoJsonBallparks, topoJsonBallparks.objects.ballparks))
        .attr('class', 'points')
        .attr('fill', 'red')
        .attr('d', path);

    }
  }

}
