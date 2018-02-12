import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavComponent } from './global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from '../../shared-services/email.service';
import { AuthService } from '../../shared-services/auth.service';
import { MatDialogModule, MatIconModule, MatMenuModule } from '@angular/material';
import { UIService } from '../../shared-services/ui.service';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

describe('GlobalNavComponent', () => {
  let component: GlobalNavComponent;
  let fixture: ComponentFixture<GlobalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        HttpClientModule
      ],
      declarations: [ GlobalNavComponent ],
      providers: [
        EmailService,
        AuthService,
        UIService,
        BreakpointObserver,
        MediaMatcher
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
