class BuildScript {
  public zipFolder = require('zip-folder');
  constructor() {
    this.zipDist().then( err => {
      console.log(typeof err);
    });
  }
  zipDist(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.zipFolder('./dist', './dist/dist.zip', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

new BuildScript();
