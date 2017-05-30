/**
 * Created by Marc on 12/16/2016.
 */

import * as BeerTrackerAPIFile from '../src/app/pages/portfolio/beer-tracker/apis/beer-tracker-api';
import * as MLBStatsAPIFile from '../src/app/pages/portfolio/mlb-stats/apis/mlb-stats-api';

class Server {
  constructor(
    private express: any = null,
    private app: any = null,
    private bodyParser: any = null,
    private path: any = null,
    private server: any = null
  ) {
    this.express = require('express');
    this.app = this.express();
    this.bodyParser = require('body-parser');
    this.path = require('path');
    this.server = require('http').createServer(this.app);
    this.app.listen(process.env.PORT || 3000);
    this.app.use(this.bodyParser.urlencoded({ extended: true }));
    this.app.use(this.bodyParser.json());
    this.app.use(this.express.static(__dirname));
    this.app.use('/api/mlbstats', MLBStatsAPIFile);
    // this.app.use('/api/yelp', require('./public/shared/apis/yelp.api'));
    this.app.use('/api/beertracker', BeerTrackerAPIFile);
    this.app.get('/*', (req: any, res: any) => {
      res.sendFile(this.path.join(__dirname + '/index.html'));
    });


  }
}
new Server();
