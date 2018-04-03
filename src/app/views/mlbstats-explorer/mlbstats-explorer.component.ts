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
  private _height = 500;
  private _width = 960;
  private _svg: any;
  private _g: any;
  constructor(private _chadwickService: ChadwickService, private _uiService: UIService, private _httpClient: HttpClient,
              private _geoLocationService: GeoLocationService) {

  }

  async ngOnInit() {

    const ballparks = await this._chadwickService.getBallparks();
    const geoReq = await this._chadwickService.createBallparkGeoJsonRequestSet(ballparks.filter( b => {
        return (b) && ( b.state && b.state !== '' ) && ( b.city && b.city !== '' );
      }
    ));
    const topoJsonBallparks = topojson.topology({ballparks: geoReq});
    console.log(topoJsonBallparks);
    const us: any = await this._geoLocationService.getUSTopoJson();
    if (true) {

      const projection = d3.geoAlbersUsa()
        .scale( 1070 )
        .translate( [ this._width / 2, this._height / 2 ] );

      this._path = d3.geoPath()
        .projection(projection);

      this._svg = d3.select('svg')
        .attr('width', this._width)
        .attr('height', this._height);

      this._svg.append('rect')
        .attr('class', 'background')
        .attr('width', this._width)
        .attr('height', this._height)
        .on('click', this.onStateClick.bind(this));

      this._g = this._svg.append('g');

      this._g.append('g')
        .attr('id', 'states')
        .selectAll('path')
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append('path')
        .attr('d', this._path)
        .on('click', this.onStateClick.bind(this));

      this._g.append('path')
        .datum(topojson.mesh(us, us.objects.states, (a, b) => { return a !== b; }))
        .attr('id', 'state-borders')
        .attr('d', this._path);

      this._g.append('path')
        .datum(topojson.feature(topoJsonBallparks, topoJsonBallparks.objects.ballparks))
        .attr('class', 'points')
        .text((d) => { return d.name; })
        .attr('d', this._path);


    }
  }
  onStateClick(d) {
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
    this._g.selectAll('path')
      .classed('active', this._centered && function (z) { return z === this._centered; } );

    this._g.transition()
      .duration(750)
      .attr('transform', 'translate(' + this._width / 2 + ',' + this._height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
      .style('stroke-width', 1.5 / k + 'px');
  }

}
