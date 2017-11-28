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
    this.lines = this.getLines(value);

  }
  constructor() { }

  ngOnInit() {
  }
  getLines(obj: any, arrayName: string = null): object[] {
    let lines = [];
    if (Array.isArray(obj)) {
      const arrayPrefix = arrayName ? arrayName : 'Array';
      lines.push(`${arrayPrefix}: [`);
      for (let i = 0; i < obj.length; i++) {
        const item = obj[i];
        if (Array.isArray(item)) {

        } else if (typeof item === 'object') {
          lines = lines.concat(this.getLines(item));
        } else {
          lines.push(item);
        }
      }
      lines.push(']');
    } else if (typeof obj === 'object') {
      lines.push('{');
      for (const o in obj) {
        if (obj[o]) {
          const item = obj[o];
          if (Array.isArray(item)) {
            lines = lines.concat(this.getLines(item, o));
          } else if (typeof item === 'object') {
            lines = lines.concat(this.getLines(item));
          } else {
            lines.push(`${o}: ${item}`);
          }
        }
      }
      lines.push('}');
    } else {
      alert(obj);
    }

    return lines;
  }
}
