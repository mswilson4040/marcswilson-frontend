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
  getLines(obj: any): object[] {

    const lines = [];
    if (Array.isArray(obj)) {
      lines.push('[');
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'string' || typeof obj[i] === 'number') {
          const comma = (i + 1) === obj.length ? '' : ',';
          lines.push(`${obj[i]}${comma}`);
        } else {
          // TODO: Handle objects, arrays, etc...
        }
      }
      lines.push(']');
    } else {

    }
    return lines;
  }
}
