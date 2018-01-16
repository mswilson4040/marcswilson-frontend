import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBTeamComponent } from './mlbteam.component';
import { MlbStatsService } from '../services/mlb-stats.service';
import { UIService } from '../../../../shared-services/ui.service';
import { HttpClientModule } from '@angular/common/http';

describe('MLBTeamComponent', () => {
  let component: MLBTeamComponent;
  let fixture: ComponentFixture<MLBTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLBTeamComponent ],
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
    fixture = TestBed.createComponent(MLBTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
