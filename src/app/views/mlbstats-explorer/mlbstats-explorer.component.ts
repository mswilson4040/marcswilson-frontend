import { Component, ElementRef, OnInit } from '@angular/core';
import { select, geoMercator, geoPath } from 'd3';
import { ChadwickService } from '../../shared-services/chadwick.service';
import { UIService } from '../../shared-services/ui.service';
import { HttpClient } from '@angular/common/http';
import { GeoLocationService } from '../../shared-services/geo-location.service';
import * as topojson from 'topojson';
import * as d3 from 'd3';

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
      const svg = d3.select('svg');
      const path = d3.geoPath();

      this._httpClient.get<{ objects: { states: any } }>('https://d3js.org/us-10m.v1.json').subscribe( us => {
        const projection = d3.geoAlbersUsa();
        svg.append('g')
          .attr('class', 'states')
          .selectAll('path')
          .data(topojson.feature(us, us.objects.states).features)
          .enter().append('path')
          .attr('d', path);

        svg.append('path')
          .attr('class', 'state-borders')
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.5)
          .attr('d', path(topojson.mesh(us, us.objects.states, (a, b) => { return a !== b; })));
        svg.selectAll('.ballparks')
          .data(topoJsonBallparks.objects.ballparks.geometries)
          .enter().append('circle')
          .attr('class', 'ballparks')
          .attr('fill', 'red')
          .attr('r', 2)
          .attr('cx', (d: {coordinates: any}) => {
            const cords = projection([d['coordinates'][0], d['coordinates'][1]]);
            return cords[0];
          })
          .attr('cy', (d) => {
            const cords = projection([d['coordinates'][0], d['coordinates'][1]]);
            return cords[1];
          });
      });

    }
  }

}
