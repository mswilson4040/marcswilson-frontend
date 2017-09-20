import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { GlobalNavComponent } from '../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OverlayComponent } from '../shared-components/overlay/overlay.component';
import { MdDialogModule, MdMenuModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AuthService } from '../shared-services/auth.service';
import { EmailService } from '../shared-services/email.service';
import { UIService } from '../shared-services/ui.service';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdDialogModule,
        HttpModule,
        MdMenuModule

      ],
      declarations: [ ShellComponent, GlobalNavComponent, OverlayComponent ],
      providers: [
        AuthService,
        EmailService,
        UIService
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
