import { Component, ElementRef, OnInit } from '@angular/core';
import { select, geoMercator, geoPath } from 'd3';
import { ChadwickService } from '../../shared-services/chadwick.service';
import { UIService } from '../../shared-services/ui.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mlbstats-explorer',
  templateUrl: './mlbstats-explorer.component.html',
  styleUrls: ['./mlbstats-explorer.component.scss'],
  providers: [ ChadwickService ]
})
export class MlbstatsExplorerComponent implements OnInit {

  constructor(private _chadwickService: ChadwickService, private _uiService: UIService, private _httpClient: HttpClient) { }

  async ngOnInit() {
    const canvas = select('#mlbStatsExplorer').append('svg');
    canvas.attr('id', 'test');
    this._httpClient.get<any>('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
      .subscribe( data => {
      const group = canvas.selectAll('g')
        .data(data.features)
        .enter()
        .append('g');
      const projection = geoMercator();
      const path = geoPath().projection(projection);

      const areas = group.append('path')
        .attr('d', path)
        .attr('class', 'area')
        .attr('fill', 'green');
    });
  }

}
