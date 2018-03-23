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
    // const canvas = select('#mlbStatsExplorer').append('svg');
    // canvas.attr('height', '100%');
    // canvas.attr('width', '100%');
    // canvas.attr('id', 'test');
    //
    // const map = await this._httpClient.get<any>('https://d3js.org/us-10m.v1.json').toPromise();
    // const ballparks = await this._chadwickService.getBallparks();
    // const geoReq = await this._chadwickService.createBallparkGeoJsonRequestSet(ballparks.filter( b => {
    //     return (b) && ( b.state && b.state !== '' ) && ( b.city && b.city !== '' );
    //   }
    // ));

    if (true) {
      const svg = d3.select('svg');
      const path = d3.geoPath();

      this._httpClient.get<{ objects: { states: any } }>('https://d3js.org/us-10m.v1.json').subscribe( us => {

        svg.append('g')
          .attr('class', 'states')
          .selectAll('path')
          .data(topojson.feature(us, us.objects.states).features)
          .enter().append('path')
          .attr('d', path);

        svg.append('path')
          .attr('class', 'state-borders')
          .attr('d', path(topojson.mesh(us, us.objects.states, (a, b) => { return a !== b; })));
      });


      // const group = canvas.selectAll('g')
      //   .data(map.features)
      //   .enter()
      //   .append('g');
      // const projection = geoMercator().fitSize([1000, 1000], map);
      // const path = geoPath().projection(projection);
      //
      // const areas = group.append('path')
      //   .attr('d', path)
      //   .attr('class', 'area')
      //   .attr('fill', 'red');

      // const group2 = canvas.selectAll('g')
      //   .data(geoReq.features)
      //   .enter()
      //   .append('g');
      //
      // const projection2 = geoMercator().fitSize([1000, 1000], geoReq);
      // const path2 = geoPath().projection(projection2);
      // const areas2 = group2.append('path')
      //   .attr('d', path2)
      //   .attr('class', 'park')
      //   .attr('fill', 'green');

    }
  }

}
