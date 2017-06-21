/**
 * Created by Marc on 4/7/2017.
 *
 * -- To run, type 'node createMongoIndexes' into termainal
 */

class CreateMongoDBIndexes {
  private mongodb: any = null;
  public DB_PATH = 'mongodb://localhost:27017/mlbstatsdb';

  constructor() {
    this.mongodb = require('mongodb').MongoClient;

    this.createIndexes();
  }

  createIndexes(): void {
    const promiseArray = [
      this.allStarFulls(),
      this.appearances(),
      this.awardsManagers(),
      this.awardsShareManagers(),
      this.awardsSharePlayers(),
      this.battingPosts(),
      this.battings(),
      this.collegePlayings(),
      this.fieldingOFS(),
      this.fieldingOFSplits(),
      this.fieldingPosts(),
      this.fieldings(),
      this.hallOfFames(),
      this.homeGames(),
      this.managers(),
      this.managersHalfs(),
      this.peoples(),
      this.pitchingPosts(),
      this.pitchings(),
      this.salaries(),
      this.seriesPosts(),
      this.teams(),
      this.teamsHalfs()
    ];
    Promise.all(promiseArray).then(results => {
      console.log(results);
    });

  }
  allStarFulls(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('allstarfulls');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        })
        db.close();
      })
    })
  }
  appearances(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('appearances');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        })
        db.close();
      });
    });
  }
  awardsManagers(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('awardsmanagers');
        collection.createIndex({playerID: 1, yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        })
        db.close();
      })
    })
  }
  awardsShareManagers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('awardssharemanagers');
        collection.createIndex({ playerID: 1, yearID: 1 }, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  awardsSharePlayers(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('awardsshareplayers');
        collection.createIndex({playerID: 1, yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  battingPosts(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('battingposts');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  battings(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('battings');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  collegePlayings(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('collegeplayings');
        collection.createIndex({playerID: 1, yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  fieldingOFS(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('fieldingofs');
        collection.createIndex({playerID: 1, yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  fieldingOFSplits(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('fieldingofsplits');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  fieldingPosts(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('fieldingposts');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  fieldings(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('fieldings');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  hallOfFames(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('halloffames');
        collection.createIndex({playerID: 1, yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  homeGames(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('homegames');
        collection.createIndex({'year.key': 1, 'team.key': 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  managers(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('managers');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  managersHalfs(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('managershalfs');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  peoples(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('peoples');
        collection.createIndex({playerID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  pitchingPosts(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('pitchingposts');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  pitchings(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('pitchings');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  salaries(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('salaries');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  seriesPosts(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('seriesposts');
        collection.createIndex({yearID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  teams(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('teams');
        collection.createIndex({yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
  teamsHalfs(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.mongodb.connect(this.DB_PATH, (connectionError, db) => {
        const collection = db.collection('teamshalfs');
        collection.createIndex({playerID: 1, yearID: 1, teamID: 1}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
        db.close();
      });
    });
  }
}

new CreateMongoDBIndexes();
