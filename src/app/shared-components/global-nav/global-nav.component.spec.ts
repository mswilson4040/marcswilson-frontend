import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavComponent } from './global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MdDialogModule, MdMenuModule } from '@angular/material';
import { EmailService } from '../../shared-services/email.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../shared-services/auth.service';

describe('GlobalNavComponent', () => {
  let component: GlobalNavComponent;
  let fixture: ComponentFixture<GlobalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdDialogModule,
        HttpModule,
        MdMenuModule
      ],
      declarations: [ GlobalNavComponent ],
      providers: [
        EmailService,
        AuthService
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
