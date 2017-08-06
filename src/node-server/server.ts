import * as MLBStatsAPI from './mlb-stats-api';
import * as PowerballAPI from './powerball-api';
import * as AuthAPI from './auth-api';
import * as EmailAPI from './email-api';

class Server {
  constructor(
    private express: any = null,
    private app: any = null,
    private bodyParser: any = null,
    private path: any = null,
    private server: any = null,
    private cors: any = null,
    private dotenv: any = null
  ) {
    this.cors = require('cors');
    this.express = require('express');
    this.app = this.express();
    this.bodyParser = require('body-parser');
    this.path = require('path');
    this.dotenv = require('dotenv').config({path: 'server.env'});
    this.server = require('http').createServer(this.app);
    this.app.listen(process.env.PORT || 3000);
    this.app.use(this.bodyParser.urlencoded({ extended: true }));
    this.app.use(this.bodyParser.json());
    this.app.use(this.express.static(this.path.join(__dirname + '/../')));
    this.app.use(this.cors());
    this.app.use('/api/mlbstats', MLBStatsAPI);
    this.app.use('/api/powerball', PowerballAPI);
    this.app.use('/api/auth', AuthAPI);
    this.app.use('/api/email', EmailAPI);
    // this.app.use('/api/yelp', require('./public/shared/apis/yelp.api'));
    this.app.get('/*', (req: any, res: any) => {
      res.sendFile(this.path.join(__dirname + '/../index.html'));
    });
  }
}
new Server();
