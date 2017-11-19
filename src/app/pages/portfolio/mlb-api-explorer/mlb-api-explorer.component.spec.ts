import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbApiExplorerComponent } from './mlb-api-explorer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockBackend } from '@angular/http/testing';
import { Http } from '@angular/http';
import { UIService } from '../../../shared-services/ui.service';
import { MlbStatsService } from '../mlb-stats/services/mlb-stats.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatDatepickerModule, MatInputModule, MatNativeDateModule,
  MatSliderModule, MatTabsModule
} from '@angular/material';
import { GlobalNavComponent } from '../../../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from '../../../shared-services/email.service';
import { AuthService } from '../../../shared-services/auth.service';

describe('MlbApiExplorerComponent', () => {
  let component: MlbApiExplorerComponent;
  let fixture: ComponentFixture<MlbApiExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatSliderModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatTabsModule
      ],
      declarations: [
        MlbApiExplorerComponent,
        GlobalNavComponent
      ],
      providers: [
        UIService,
        MlbStatsService,
        {provide: Http, deps: [MockBackend]},
        EmailService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbApiExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
