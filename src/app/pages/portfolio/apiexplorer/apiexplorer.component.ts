import { AfterViewInit, Component, OnInit } from '@angular/core';
import { API, ApiRegistry } from '../../../shared-classes/api-registry';
import { HttpRequestMethods } from '../../../enums/http-request-methods.enum';
import { HttpClient } from '@angular/common/http';
import { UIService } from '../../../shared-services/ui.service';
import { MatDialog, MatSidenav } from '@angular/material';
import { ErrorDialogComponent } from '../../../shared-components/dialogs/error-dialog/error-dialog.component';

@Component({
  selector: 'app-apiexplorer',
  templateUrl: './apiexplorer.component.html',
  styleUrls: ['./apiexplorer.component.scss']
})
export class ApiExplorerComponent implements OnInit, AfterViewInit {
  public activePanelId = 0;
  public apis: API[] = [];
  public activeApi: API = new API();
  public methods = HttpRequestMethods;
  constructor(private _httpClient: HttpClient, private _uiService: UIService, private _matDialog: MatDialog) {
    this.apis = new ApiRegistry().apis;
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
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
  setEndpoint(api: API, sidenav: MatSidenav): void {
    this.activeApi = api;
    sidenav.close();
  }
  invokeApi(): void {
    this._uiService.showOverlay('Fetching API Result...');
    this._httpClient.get(this.activeApi.url).subscribe( response => {
      if (response) {

      }
      this._uiService.hideOverlay();
    }, error => {
      this._uiService.hideOverlay();
      const edr = this._matDialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;

    });
  }
}
