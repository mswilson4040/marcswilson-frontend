import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatabaseManagerService } from './services/database-manager.service';
import { UserManagerService } from '../../shared-services/user-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ DatabaseManagerService, UserManagerService ]
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

}
