import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbstatsExplorerComponent } from './mlbstats-explorer.component';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from '../../shared-services/ui.service';

describe('MlbstatsExplorerComponent', () => {
  let component: MlbstatsExplorerComponent;
  let fixture: ComponentFixture<MlbstatsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbstatsExplorerComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        UIService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbstatsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
