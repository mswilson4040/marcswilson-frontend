import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { UserManagerService } from '../../../../shared-services/user-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../../../shared-services/ui.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        MatTableModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers: [
        UserManagerService,
        UIService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
