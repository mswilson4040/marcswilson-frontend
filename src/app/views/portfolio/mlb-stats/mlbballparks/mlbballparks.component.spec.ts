import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBBallparksComponent } from './mlbballparks.component';
import { MlbStatsService } from '../services/mlb-stats.service';
import { UIService } from '../../../../shared-services/ui.service';
import { HttpClientModule } from '@angular/common/http';

describe('MLBBallparksComponent', () => {
  let component: MLBBallparksComponent;
  let fixture: ComponentFixture<MLBBallparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBBallparksComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        MlbStatsService,
        UIService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBBallparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
