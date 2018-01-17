import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStatsComponent } from './mlb-stats.component';
import { MlbStatsService } from './services/mlb-stats.service';
import { UIService } from '../../../shared-services/ui.service';
import { GlobalNavComponent } from '../../../shared-components/global-nav/global-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatIconModule, MatMenuModule } from '@angular/material';
import { EmailService } from '../../../shared-services/email.service';
import { AuthService } from '../../../shared-services/auth.service';
import { HttpClientModule } from '@angular/common/http';

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
        MatDialogModule,
        MatIconModule,
        HttpClientModule,
        MatMenuModule
      ],
      providers: [
        MlbStatsService,
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
