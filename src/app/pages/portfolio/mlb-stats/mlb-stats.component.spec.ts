import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStatsComponent } from './mlb-stats.component';
import {MlbStatsService} from './services/mlb-stats.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import {UIService} from '../../../shared-services/ui.service';
import { GlobalNavComponent } from '../../../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';
import { EmailService } from '../../../shared-services/email.service';
import { AuthService } from '../../../shared-services/auth.service';

describe('MlbStatsComponent', () => {
  let component: MlbStatsComponent;
  let fixture: ComponentFixture<MlbStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MlbStatsComponent,
        GlobalNavComponent
      ],
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        MlbStatsService,
        {provide: Http, deps: [MockBackend]},
        UIService,
        EmailService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
