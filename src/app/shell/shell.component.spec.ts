import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { GlobalNavComponent } from '../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OverlayComponent } from '../shared-components/overlay/overlay.component';
import { AuthService } from '../shared-services/auth.service';
import { EmailService } from '../shared-services/email.service';
import { UIService } from '../shared-services/ui.service';
import {
  MatCardModule, MatDialogModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule
} from '@angular/material';
import { BreakpointHelperComponent } from '../shared-components/breakpoint-helper/breakpoint-helper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      declarations: [
        ShellComponent,
        GlobalNavComponent,
        OverlayComponent,
        BreakpointHelperComponent
      ],
      providers: [
        AuthService,
        EmailService,
        UIService,
        BreakpointObserver,
        MediaMatcher
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
