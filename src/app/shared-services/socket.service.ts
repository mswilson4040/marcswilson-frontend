import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  public socket: { on: Function, emit: Function, broadcast: Function } = null;
  public connectionCount = 0;
  public connections: EventEmitter<any> = new EventEmitter();
  constructor() {

    this.socket = io.connect(environment.NODE_SERVER);

    this.socket.on('connectionCount', count => {
      this.connections.emit(count.connections);
    });
  }

}
