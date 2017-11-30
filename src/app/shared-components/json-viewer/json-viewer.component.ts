import { Component, Input, OnInit } from '@angular/core';
import * as UUID from 'uuid/v1';

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
      const id = UUID();
      const arrayPrefix = arrayName ? arrayName : 'Array';
      lines.push( new Line(`${arrayPrefix}: [`, indentCount, true, `open_${id}`) );
      indentCount += indentSize;
      for (let i = 0; i < obj.length; i++) {
        const item = obj[ i ];
        if (Array.isArray(item)) {
          alert('asdfasdf');
        } else if (typeof item === 'object') {
          lines = lines.concat(this.getLines(item, null, indentCount));
        } else {
          const suffix = (i + 1) === obj.length ? '' : ',';
          lines.push(new Line(`${item}${suffix}`, indentCount, false, id));
        }
      }
      indentCount -= indentSize;
      lines.push(new Line('],', indentCount, false, `close_${id}`));
    } else if (typeof obj === 'object') {
      const id = UUID();
      lines.push( new Line('{', indentCount, true, `open_${id}`) );
      indentCount += indentSize;
      let counter = 0;
      for (const o in obj) {
        if (obj[o] || obj[o] === 0 || typeof obj[o] === 'string') {
          counter++;
          const item = obj[o];
          if (Array.isArray(item)) {
            lines = lines.concat(this.getLines(item, o, indentCount));
          } else if (typeof item === 'object') {
            lines = lines.concat(this.getLines(item, null, indentCount));
          } else {
            const suffix = counter === Object.keys(obj).length ? '' : ',';
            lines.push( new Line(`${o}: ${item}${suffix}`, indentCount, false, id) );
          }
        } else {
          console.log(obj[o]);
          console.log(o);
          console.log(typeof obj[o]);
        }
      }
      indentCount -= indentSize;
      lines.push( new Line('},', indentCount, false, `close_${id}`) );
    } else {
      alert(obj);
    }

    return lines;
  }
  toggleBlock(line: Line): void {
    line.collapsed = !line.collapsed;
  }
}

class Line {
  public text: string = null;
  public indentCount: number = null;
  public arrayOfNothing: any[] = [];
  public collapsable: boolean = null;
  public blockId: string = null;
  public collapsed = false;
  constructor (_text: string, _indentCount: number, _collapsable: boolean, _blockId: string) {
    this.text = _text;
    this.indentCount = _indentCount;
    this.arrayOfNothing = Array(this.indentCount).fill(null);
    this.collapsable = _collapsable;
    this.blockId = _blockId;
  }
}
