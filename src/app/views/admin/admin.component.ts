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
  public connectionCount = 0;
  constructor() { }

  ngOnInit() {
    this._socket = io.connect(environment.API_PATH);
    this._socket.on('connectionCount', count => {
      this.connectionCount = count.connections;
    });
    console.log(this._socket);
  }

}
