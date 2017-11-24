import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {
  public json: string = null;
  @Input() set response(value: object) {
    this.json = JSON.stringify(value, null, 2);

  }
  constructor() { }

  ngOnInit() {
  }
}
