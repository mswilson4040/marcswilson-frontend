import {Powerball} from './powerball';
export class PowerballData {
  public drawings: Array<Powerball> = new Array<Powerball>();

  constructor() {

  }
  addDrawing(drawing: Powerball) {
    this.drawings.push(drawing);
    return this.drawings;
  }
  getHighchartsData() {
    const numbersObj = { name: 'Numbers', data: this.getNumbersHitCountArray(), color: '#cf0a2c' };
    const powerballObj = { name: 'Powerball', data: this.getPowerballsHitCountArray(), color: '#cf0a2c' };

    return [numbersObj, powerballObj];
  }
  getNumbersHitCountArray(): Array<number> {
    const hash = this.initHash();
    const ret = [];
    for (let i = 0; i < this.drawings.length; i++) {
      const numbers = this.drawings[i].convertNumbersToArray();
      for (let j = 0; j < numbers.length; j++) {
        hash[numbers[j].toString()] += 1;
      }
    }
    for (const obj in hash) {
      if (hash.hasOwnProperty(obj)) {
        ret.push( hash[ obj ] );
      }
    }
    return ret;
  }
  getPowerballsHitCountArray(): Array<number> {
    const hash = this.initHash();
    const ret = [];

    for (let i = 0; i < this.drawings.length; i++) {
      const pb = this.drawings[i].powerball;
      hash[pb.toString()] += 1;
    }
    for (const obj in hash) {
      if (hash.hasOwnProperty(obj)) {
        ret.push( hash[ obj ] );
      }
    }
    return ret;
  }
  initHash() {
    const hash = {};
    for (let i = 1; i < 70; i++) {
      hash[i.toString()] = 0;
    }
    return hash;
  }

}
