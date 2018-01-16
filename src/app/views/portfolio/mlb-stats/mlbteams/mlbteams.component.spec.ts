import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBteamsComponent } from './mlbteams.component';
import { MlbStatsService } from '../services/mlb-stats.service';
import { MatSliderModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('MlbteamsComponent', () => {
  let component: MLBteamsComponent;
  let fixture: ComponentFixture<MLBteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBteamsComponent ],
      providers: [
        MlbStatsService
      ],
      imports: [
        MatSliderModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
