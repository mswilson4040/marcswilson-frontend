import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbApiExplorerComponent } from './mlb-api-explorer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';
import {UIService} from '../../../shared-services/ui.service';
import {MlbStatsService} from '../mlb-stats/services/mlb-stats.service';
import {
  MdAutocompleteModule, MdDatepickerModule, MdInputModule, MdNativeDateModule,
  MdSliderModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MlbApiExplorerComponent', () => {
  let component: MlbApiExplorerComponent;
  let fixture: ComponentFixture<MlbApiExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdSliderModule,
        MdAutocompleteModule,
        ReactiveFormsModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        BrowserAnimationsModule
      ],
      declarations: [ MlbApiExplorerComponent ],
      providers: [ UIService, MlbStatsService, {provide: Http, deps: [MockBackend]} ]
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
