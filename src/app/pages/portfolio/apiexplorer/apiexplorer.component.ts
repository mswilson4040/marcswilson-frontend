import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiexplorer',
  templateUrl: './apiexplorer.component.html',
  styleUrls: ['./apiexplorer.component.scss']
})
export class ApiExplorerComponent implements OnInit {
  public activePanelId = 0;
  constructor() { }

  ngOnInit() {
  }
  onPanelOpen(id: number): void {
    if (id) {
      this.activePanelId = id;
    } else {
      this.activePanelId = 0;
    }
  }
  onPanelClose(id: number): void {
    if (this.activePanelId === id) {
      this.activePanelId = 0;
    }
  }
}
