import { Component, OnInit } from '@angular/core';
import { DatabaseManagerService } from './services/database-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ DatabaseManagerService ]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
