import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseManagerService } from './services/database-manager.service';
import { SocketService } from '../../shared-services/socket.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ DatabaseManagerService ]
})
export class AdminComponent implements OnInit, OnDestroy {

  public connectionCount = 0;
  constructor(private _socketService: SocketService) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

}
