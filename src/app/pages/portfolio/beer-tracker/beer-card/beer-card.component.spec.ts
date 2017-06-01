import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCardComponent } from './beer-card.component';
import { BeerTrackerService } from '../services/beer-tracker.service';
import { HttpModule } from '@angular/http';
import { UIService } from '../../../../shared-services/ui.service';
import {Beer} from '../classes/beer';


describe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ BeerCardComponent ],
      providers: [BeerTrackerService, UIService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
