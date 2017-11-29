import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {
  public json: string = null;
  public lines: object[] = [];
  @Input() set response(value: object) {
    this.json = JSON.stringify(value, null, 2);
    this.lines = [];
    this.lines = this.getLines(value, null, 0);

  }
  constructor() { }

  ngOnInit() {
  }
  getLines(obj: any, arrayName: string = null, indentCount: number): object[] {
    const indentSize = 4;
    let lines = [];
    if (Array.isArray(obj)) {
      const arrayPrefix = arrayName ? arrayName : 'Array';
      lines.push( new Line(`${arrayPrefix}: [`, indentCount) );
      indentCount += indentSize;
      for (let i = 0; i < obj.length; i++) {
        const item = obj[ i ];
        if (Array.isArray(item)) {
          alert('asdfasdf');
        } else if (typeof item === 'object') {
          lines = lines.concat(this.getLines(item, null, indentCount));
        } else {
          const suffix = (i + 1) === obj.length ? '' : ',';
          lines.push(new Line(`${item}${suffix}`, indentCount));
        }
      }
      indentCount -= indentSize;
      lines.push(new Line(']', indentCount));
    } else if (typeof obj === 'object') {
      lines.push( new Line('{', indentCount) );
      indentCount += indentSize;
      let counter = 0;
      for (const o in obj) {
        if (obj[o]) {
          counter++;
          const item = obj[o];
          if (Array.isArray(item)) {
            lines = lines.concat(this.getLines(item, o, indentCount));
          } else if (typeof item === 'object') {
            lines = lines.concat(this.getLines(item, null, indentCount));
          } else {
            lines.push( new Line(`${o}: ${item},`, indentCount) );
          }
        }
      }
      indentCount -= indentSize;
    } else {
      alert(obj);
    }

    return lines;
  }
}

class Line {
  public text: string = null;
  public indentCount: number = null;
  public arrayOfNothing: any[] = [];
  constructor (private _text: string, private _indentCount: number) {
    this.text = _text;
    this.indentCount = _indentCount;
    this.arrayOfNothing = Array(this.indentCount).fill(null);
  }
}
