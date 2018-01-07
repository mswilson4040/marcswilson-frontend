import {Runner} from './runner';

export class BaseRunners {
  public status: string = null;
  public runner_on_1b: Runner = new Runner();
  public runner_on_2b: Runner = new Runner();
  public runner_on_3b: Runner = new Runner();
  constructor(data?) {
    if (data) {
      this.status = data.status;
      if (this.status !== '0') {
        if (data.hasOwnProperty('runner_on_1b')) {
          this.runner_on_1b = new Runner(data.runner_on_1b);
        }
        if (data.hasOwnProperty('runner_on_2b')) {
          this.runner_on_2b = new Runner(data.runner_on_2b);
        }
        if (data.hasOwnProperty('runner_on_3b')) {
          this.runner_on_3b = new Runner(data.runner_on_3b);
        }

      }
    }
  }
}

