import { Component, OnInit } from '@angular/core';
import { DatabaseManagerService } from './services/database-manager.service';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ DatabaseManagerService ]
})
export class AdminComponent implements OnInit {
  private _socket = null;
  constructor() { }

  ngOnInit() {
    this._socket = io.connect(environment.API_PATH);
    console.log(this._socket);
  }

}
