import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  public socket: { on: Function, emit: Function, broadcast: Function } = null;
  public connectionCount = 0;
  constructor() {

    this.socket = io.connect(environment.API_PATH);

    this.socket.on('connectionCount', count => {
      this.connectionCount = count.connections;
    });
  }

}
