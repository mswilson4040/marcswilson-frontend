export class BeerTrackerAPI {
  constructor(private express: any = null, private request: any = null, private router: any = null, private mongoose: any = null) {
    this.express = require('express');
    this.mongoose = require('mongoose').createConnection('mongodb://localhost:27017/beerdb');
    this.request = require('request');
    this.router = this.express.Router();
    this.mongoose.Promise = global.Promise;
    // this.mongoose.createConnection('mongodb://localhost:27017/beerdb');

    this.mongoose.model('completedbeers', {
      Beer: String,
      Type: String,
      Completed: Date,
      UserId: String
    });

    this.mongoose.model('untappdreferencetables', {
      name: String,
      type: String,
      bid: String,
      label: String,
      rating: String
    });

    this.router.get('/getLiveMenu',  (req, response) => {
      this.request({
          uri: 'http://taphousegrill.com/beer.html'
        },
        (error, res, body) => {
          response.send(body);
        });
    });
    this.router.post('/getCompletedBeers', (req, response) => {
      const id = req.body.id;
      this.mongoose.model('completedbeers').find({UserId: id}).then(docs => {
        response.send(docs);
      });
    });
    this.router.post('/getUntappdInfo', (req, response) => {
      const CLIENT_ID = '1EF2EBEFE49E9C8DC2332D2048650835E6124FF0';
      const CLIENT_SECRET = '2A46ADB02931766AAE9FE3258234B1E00C5C3408';
      const beerName = req.body.beer.name;
      this.request({
          uri: 'https://api.untappd.com/v4/search/beer?q=' + beerName + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        },
        (error, res, body) => {
          response.send(body);
        });
    });
    this.router.post('/getUntappdInfoByBID', (req, response) => {
      const CLIENT_ID = '1EF2EBEFE49E9C8DC2332D2048650835E6124FF0';
      const CLIENT_SECRET = '2A46ADB02931766AAE9FE3258234B1E00C5C3408';
      const bid = req.body.bid;
      this.request({
          uri: 'https://api.untappd.com/v4/beer/info/' + bid + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        },
        (error, res, body) => {
          response.send(body);
        });
    });
    this.router.get('/getUntappdReferenceTable', (req, response) => {
      this.mongoose.model('untappdreferencetables').find().then(docs => {
        response.send(docs);
      });
    });
    this.router.post('/setUntappdReference', (req, response) => {
      this.mongoose.model('untappdreferencetables').update({
        name: req.body.name
      }, {
        $set: {
          name: req.body.name,
          type: req.body.type,
          bid: req.body.bid,
          label: req.body.label,
          rating: req.body.rating
        }
      }, {
        upsert: true
      }).then(res => {
        response.send(res);
      });
    });
    this.router.post('/toggleCompleteState', (req, response) => {
      const status = !req.body.beer.completed;
      const userId = req.body.userId;

      if (status === true) {
        this.mongoose.model('completedbeers').update({
            Beer: req.body.beer.name
          },
          {
            $set: {
              Beer: req.body.beer.name,
              UserId: userId,
              Type: req.body.beer.type,
              Completed: new Date()
            }
          },
          {
            upsert: true
          }).then(res => {
          response.send(status);
        });
      } else {
        this.mongoose.model('completedbeers').remove({
          Beer: request.body.beer.name,
          UserId: userId
        }).then(res => {
          response.send(status);
        });

      }
    });

    module.exports = this.router;
  }
}

new BeerTrackerAPI();

