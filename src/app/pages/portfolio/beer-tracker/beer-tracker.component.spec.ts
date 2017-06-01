import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTrackerComponent } from './beer-tracker.component';
import {FormsModule} from '@angular/forms';
import {BeerCardComponent} from './beer-card/beer-card.component';
import {BeerInfoDialogComponent} from './beer-info-dialog/beer-info-dialog.component';
import {UIService} from '../../../shared-services/ui.service';
import {BeerTrackerService} from './services/beer-tracker.service';
import {MockBackend} from '@angular/http/testing';
import {Http} from '@angular/http';

describe('BeerTrackerComponent', () => {
  let component: BeerTrackerComponent;
  let fixture: ComponentFixture<BeerTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ BeerTrackerComponent, BeerCardComponent, BeerInfoDialogComponent ],
      providers: [UIService, BeerTrackerService, {provide: Http, deps: [MockBackend]}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
