import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { DatabaseManagerComponent } from './components/database-manager/database-manager.component';
import { MatDialogModule, MatIconModule, MatTableModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../shared-services/ui.service';
import { SocketService } from '../../shared-services/socket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        DatabaseManagerComponent,
        UsersComponent
      ],
      imports: [
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        UIService,
        SocketService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
