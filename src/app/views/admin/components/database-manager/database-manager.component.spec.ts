import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseManagerComponent } from './database-manager.component';
import { MatDialogModule, MatIconModule, MatTableModule } from '@angular/material';
import { DatabaseManagerService } from '../../services/database-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../../../shared-services/ui.service';
import { SocketService } from '../../../../shared-services/socket.service';

describe('DatabaseManagerComponent', () => {
  let component: DatabaseManagerComponent;
  let fixture: ComponentFixture<DatabaseManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatabaseManagerComponent
      ],
      imports: [
        MatIconModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [
        DatabaseManagerService,
        UIService,
        SocketService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
