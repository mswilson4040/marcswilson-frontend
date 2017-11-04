import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerballComponent } from './powerball.component';
import {PowerballService} from './services/powerball.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import {UIService} from '../../../shared-services/ui.service';
import { GlobalNavComponent } from '../../../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';
import { EmailService } from '../../../shared-services/email.service';
import { AuthService } from '../../../shared-services/auth.service';

describe('PowerballComponent', () => {
  let component: PowerballComponent;
  let fixture: ComponentFixture<PowerballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PowerballComponent,
        GlobalNavComponent
      ],
      providers: [
        PowerballService,
        {provide: Http, deps: [MockBackend]},
        UIService,
        EmailService,
        AuthService
      ],
      imports: [
        RouterTestingModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
