import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLBPlayersComponent } from './mlbplayers.component';
import {FormsModule} from '@angular/forms';
import {MlbStatsService} from '../services/mlb-stats.service';
import {Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {UIService} from '../../../../shared-services/ui.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

describe('MLBPlayersComponent', () => {
  let component: MLBPlayersComponent;
  let fixture: ComponentFixture<MLBPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatTabsModule,
        BrowserAnimationsModule
      ],
      declarations: [ MLBPlayersComponent ],
      providers: [MlbStatsService, {provide: Http, deps: [MockBackend]}, UIService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLBPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
