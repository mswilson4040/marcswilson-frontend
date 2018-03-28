// https://bl.ocks.org/mbostock/4408297

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  providers: [ ChadwickService, GeoLocationService ],
  encapsulation: ViewEncapsulation.None
})
export class MlbstatsExplorerComponent implements OnInit {
  private _centered: boolean;
  private _path: any;
  private _height = 960;
  private _width: 500;
  private _svg: any;
  constructor(private _chadwickService: ChadwickService, private _uiService: UIService, private _httpClient: HttpClient,
              private _geoLocationService: GeoLocationService) {
    this._width = 500;
  }

  async ngOnInit() {

    const ballparks = await this._chadwickService.getBallparks();
    const geoReq = await this._chadwickService.createBallparkGeoJsonRequestSet(ballparks.filter( b => {
        return (b) && ( b.state && b.state !== '' ) && ( b.city && b.city !== '' );
      }
    ));
    const topoJsonBallparks = topojson.topology({ballparks: geoReq});
    const us: any = await this._httpClient.get('https://bl.ocks.org/mbostock/raw/4090846/us.json').toPromise();
    if (true) {

      const projection = d3.geoAlbersUsa();
      this._path = d3.geoPath().projection(projection).pointRadius(2.5);
      this._svg = d3.select('svg')
        .attr('width', this._width)
        .attr('height', this._height);

      this._svg.append('path')
        .datum(topojson.feature(us, us.objects.land))
        .attr('class', 'land')
        .attr('d', this._path)
        .on('click', this.onStateClick.bind(this));

      this._svg.append('path')
        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b ))
        .attr('class', 'states')
        .attr('d', this._path);

      this._svg.append('path')
        .datum(topojson.feature(topoJsonBallparks, topoJsonBallparks.objects.ballparks))
        .attr('class', 'points')
        .attr('d', this._path);

    }
  }
  onStateClick(d) {
    console.log(this._width);
    let x;
    let y;
    let k;
    if (d && this._centered !== d) {
      const centroid = this._path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      this._centered = d;
    } else {
      x = this._width / 2;
      y = this._height / 2;
      k = 1;
      this._centered = null;
    }
    this._svg.selectAll('path')
      .classed('active', this._centered && function (z) { return z === this._centered; } );

    this._svg.transition()
      .duration(750)
      .attr('transform', 'translate(' + this._width / 2 + ',' + this._height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
      .style('stroke-width', 1.5 / k + 'px');
  }

}
