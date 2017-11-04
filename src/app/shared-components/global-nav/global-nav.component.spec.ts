import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavComponent } from './global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from '../../shared-services/email.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../shared-services/auth.service';
import { MatDialogModule, MatMenuModule } from '@angular/material';
import { UIService } from '../../shared-services/ui.service';

describe('GlobalNavComponent', () => {
  let component: GlobalNavComponent;
  let fixture: ComponentFixture<GlobalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        HttpModule,
        MatMenuModule
      ],
      declarations: [ GlobalNavComponent ],
      providers: [
        EmailService,
        AuthService,
        UIService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
