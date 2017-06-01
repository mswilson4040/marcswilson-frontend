import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoDialogComponent } from './beer-info-dialog.component';
import {BeerTrackerService} from '../services/beer-tracker.service';
import {ConnectionBackend, Http, HttpModule} from '@angular/http';
import {UIService} from '../../../../shared-services/ui.service';

describe('BeerInfoDialogComponent', () => {
  let component: BeerInfoDialogComponent;
  let fixture: ComponentFixture<BeerInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ BeerInfoDialogComponent ],
      providers: [ BeerTrackerService, UIService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
