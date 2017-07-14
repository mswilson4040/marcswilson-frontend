export class MlbStatsApi {
  private express: any = null;
  private request: any = null;
  private router: any = null;
  private mongodb: any = null;
  private DB_PATH = 'mongodb://localhost:27017/mlbstatsdb';

  constructor() {
    this.express = require('express');
    this.request = require('request');
    this.mongodb = require('mongodb').MongoClient;
    this.router = this.express.Router();

    this.router.get('/years', (request, response) => {
      this.getDistinctYears().then(years => {
        response.json(years);
      }, error => {
        response.json({success: false, message: error});
      });
    });
    this.router.get('/years/:yearID/teams', (request, response) => {
      const yearID = +request.params.yearID;
      this.getTeamsByYear(yearID).then(teams => {
        response.json(teams);
      }, error => {
        response.json({success: false, message: error});
      });
    });
    this.router.get('/years/:yearID/teams/:teamID', (request, response) => {
      const yearID = +request.params.yearID;
      const teamID = request.params.teamID;
      this.getTeamByID(yearID, teamID).then(team => {
        response.json(team);
      });
    });
    this.router.get('/years/:yearID/players', (request, response) => {
      const yearID = +request.params.yearID;
      this.getPlayersFromYear(yearID).then(players => {
        response.json(players);
      });
    });
    this.router.get('/players/id/:playerID', (request, response) => {
      const playerID = request.params.playerID;
      this.aggregateFullPlayerStats(playerID).then(data => {
        response.json(data);
      });
    });
    this.router.get('/players/name/:playerName', (request, response) => {
      const playerName = request.params.playerName;
      this.getPlayersByName(playerName).then(data => {
        response.json(data);
      });
    });
    this.router.get('/ballparks', (request, response) => {
      this.getBallparks().then(parks => {
        response.json(parks);
      });
    });
    this.router.get('/ballparks/:key', (request, response) => {
      const key = request.params.key;
      this.getBallparkByKey(key).then(park => {
        response.json(park);
      });
    });
    this.router.get('/boxscores/:year/:month/:day', (request, response) => {
      const year = request.params.year;
      const month = request.params.month < 10 ? '0' + request.params.month + 1 : request.params.month + 1;
      const day = request.params.day < 10 ? '0' + request.params.day + 1 : request.params.day + 1;
      this.getBoxScore(year, month, day).then(score => {
        response.json(score);
      }, error => {
        response.json(error);
      });
    });

    module.exports = this.router;
  }

  getDistinctYears(): Promise<Array<number>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectError, db) => {
        const collection = db.collection('teams');
        if (connectError) {
          reject(connectError);
        } else {
          collection.distinct('yearID', {}).then(docs => {
            resolve(docs);
            db.close();
          });
        }
      });
    });
  }
  getTeamsByYear(yearID: number): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        if (connectionError) {
          reject(connectionError);
        } else {
          const collection = db.collection('teams');
          collection.find({ yearID: yearID }).toArray((queryError, docs) => {
            if (queryError) {
              reject(queryError);
              db.close();
            } else {
              db.close();
              resolve(docs);
            }
          });
        }
      });
    });
  }
  getTeamByID(yearID: number, teamID: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        if (connectionError) {
          reject(connectionError);
        } else {
          const collection = db.collection('teams');
          collection.find( {$and: [{ yearID: yearID}, {teamID: teamID.toUpperCase()}]}).toArray((queryError, docs) => {
            if (queryError) {
              db.close();
              reject(queryError);
            } else {
              db.close();
              this.aggregatePlayerData(yearID, docs[0]).then(players => {
                docs[0].players = players;
                resolve(docs[0]);
              });
            }
          });
        }
      });
    });
  }
  aggregatePlayerData(yearID: number, team: any): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        if (connectionError) {
          db.close();
          reject(connectionError);
        } else {
          const collection = db.collection('appearances');
          collection.aggregate([
            {
              $match: {
                $and: [ {yearID: yearID}, {teamID: team.teamID}]
              }
            },
            {
              $lookup: {
                from: 'peoples',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'personal'
              }
            },
            {
              $lookup: {
                from: 'fieldings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'fielding'
              }
            },
            {
              $lookup: {
                from: 'allstarfulls',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'allstar'
              }
            },
            {
              $lookup: {
                from: 'battings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'batting'
              }
            },
            {
              $lookup: {
                from: 'salaries',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'salaries'
              }
            },
            {
              $lookup: {
                from: 'pitchings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'pitching'
              }
            },
            {
              $lookup: {
                from: 'awardsplayers',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'individualAwards'
              }
            }
          ]).toArray( (queryError, docs) => {
            if (docs && docs.length > 0) {
              const players: Array<any> = new Array<any>();
              for (let i = 0; i < docs.length; i++) {
                docs[ i ].fielding = docs[ i ].fielding.filter( f => { return f.yearID === yearID && f.teamID === team.teamID; });
                docs[ i ].allstar = docs[ i ].allstar.filter( a => { return a.yearID === yearID; });
                docs[ i ].batting = docs[ i ].batting.filter( b => { return b.yearID === yearID && b.teamID === team.teamID; });
                docs[ i ].salaries = docs[ i ].salaries.filter( s => { return s.yearID === yearID && s.teamID === team.teamID; });
                docs[ i ].pitching = docs[ i ].pitching.filter( p => { return p.yearID === yearID && p.teamID === team.teamID; });
                docs[ i ].individualAwards = docs[ i ].individualAwards.filter( ia => { return ia.yearID === yearID; });
                players.push(docs[i]);
              }
              resolve(players);
            } else if (!docs) {
              reject({success: false, message: 'mongodb return undefined or null'});
            } else {
              reject([]);
            }

          });
        }
      });
    });
  }
  getPlayersFromYear(yearID: number): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        if (connectionError) {
          db.close();
          reject(connectionError);
        } else {
          const collection = db.collection('appearances');
          collection.aggregate([
            {
              $match: {
                yearID: yearID
              }
            },
            {
              $lookup: {
                from: 'peoples',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'personal'
              }
            }
          ]).toArray( (queryError, docs) => {
            if (queryError) {
              reject(queryError);
            } else if (docs && docs.length > 0) {
              const tracker = [];
              const appearances = [];
              for (let i = 0; i < docs.length; i++) {
                if (tracker.indexOf(docs[i].playerID) === -1) {
                  tracker.push(docs[i].playerID);
                  appearances.push(docs[i]);
                }
              }
              resolve(appearances);
            } else {
              reject({success: false, message: 'mongodb return undefined or null'});
            }
          });
        }
      });
    });
  }
  aggregateFullPlayerStats(playerID: string): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        if (connectionError) {
          db.close();
          reject(connectionError);
        } else {
          const collection = db.collection('appearances');
          collection.aggregate([
            {
              $match: {
                playerID: playerID
              }
            },
            {
              $lookup: {
                from: 'peoples',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'personal'
              }
            },
            {
              $lookup: {
                from: 'fieldings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'fielding'
              }
            },
            {
              $lookup: {
                from: 'allstarfulls',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'allstar'
              }
            },
            {
              $lookup: {
                from: 'battings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'batting'
              }
            },
            {
              $lookup: {
                from: 'salaries',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'salaries'
              }
            },
            {
              $lookup: {
                from: 'pitchings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'pitching'
              }
            },
            {
              $lookup: {
                from: 'awardsplayers',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'individualAwards'
              }
            },
            {
              $lookup: {
                from: 'awardsshareplayers',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'sharedAwards'
              }
            },
            {
              $lookup: {
                from: 'collegeplayings',
                localField: 'playerID',
                foreignField: 'playerID',
                as: 'colleges'
              }
            },
            {
              $lookup: {
                from: 'teams',
                localField: 'yearID',
                foreignField: 'yearID',
                as: 'teams'
              }
            }
          ]).toArray( (queryError, docs) => {
            if (docs && docs.length > 0) {
              const appearances: Array<any> = new Array<any>();
              for (let i = 0; i < docs.length; i++) {
                docs[ i ].fielding = docs[ i ].fielding.filter( f => { return f.yearID === docs[i].yearID; });
                docs[ i ].allstar = docs[ i ].allstar.filter( a => { return a.yearID === docs[i].yearID; });
                docs[ i ].batting = docs[ i ].batting.filter( b => { return b.yearID === docs[i].yearID; });
                docs[ i ].salaries = docs[ i ].salaries.filter( s => { return s.yearID === docs[i].yearID; });
                docs[ i ].pitching = docs[ i ].pitching.filter( p => { return p.yearID === docs[i].yearID; });
                docs[ i ].individualAwards = docs [ i ].individualAwards.filter( ia => { return ia.yearID === docs[i].yearID; });
                docs[ i ].sharedAwards = docs[ i ].sharedAwards.filter( sa => { return sa.yearID === docs[i].yearID; });
                docs[ i ].teams = docs[ i ].teams.filter( t => { return t.yearID === docs[i].yearID && t.teamID === docs[i].teamID; });
                appearances.push(docs[i]);
              }
              resolve(appearances);
            } else if (!docs) {
              reject({success: false, message: 'mongodb return undefined or null'});
            } else {
              reject([]);
            }
          });
        }
      });
    });
  }
  getBallparks(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectError, db) => {
        const collection = db.collection('parks');
        if (connectError) {
          reject(connectError);
        } else {
          collection.find().toArray( (queryError, docs) => {
            if (queryError) {
              reject(queryError);
            } else {
              db.close();
              resolve(docs);
            }
          });
        }
      });
    });
  }
  getBallparkByKey(key: string): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectError, db) => {
        const collection = db.collection('parks');
        if (connectError) {
          reject(connectError);
        } else {
          collection.find({'park.key': key}).toArray( (queryError, docs) => {
            if (queryError) {
              reject(queryError);
            } else {
              db.close();
              resolve(docs);
            }
          });
        }
      });
    });
  }
  getPlayersByName(name: string): Promise<Array<any>> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('peoples');
        if (connectionError) {
          reject(connectionError);
          db.close();
        } else {
          const split = name.split(' ');
          if (split.length > 0 && split.length === 1) {
            collection.find( {
              $or: [
                {'nameFirst': {$regex: name, $options: 'i'}},
                {'nameLast': {$regex: name, $options: 'i'}}
                ]
            } ).toArray( (queryError, docs) => {
              resolve(docs);
              db.close();
            });
          } else {
            collection.find( {
              $and: [
                {'nameFirst': {$regex: split[0], $options: 'i'}},
                {'nameLast': {$regex: split[1], $options: 'i'}}
                ]
            } ).toArray( (queryError, docs) => {
              resolve(docs);
              db.close();
            });
          }
        }
      });
    });
  }
  getBoxScore(year: string, month: string, day: string): Promise<any> {
    let err = false;
    return new Promise( (resolve, reject) => {
      this.request('http://gd2.mlb.com/components/game/mlb/year_' + year + '/month_' +
        month + '/day_' + day + '/master_scoreboard.json', (err, res, body) => {
        let ret = null;
        try {
          ret = JSON.parse(body);
        } catch (ex) {
          ret = ex;
          err = true;
        } finally {
          if (err === false) {
            resolve(ret);
          } else {
            reject(ret);
          }
        }
      }, error => {
        reject(error.message);
      });
    });
  }
}
new MlbStatsApi();
