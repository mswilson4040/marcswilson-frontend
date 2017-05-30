import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../classes/beer';
import {UIService} from '../../../../shared-services/ui.service';
import {BeerTrackerService} from '../services/beer-tracker.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {
  @Input() beer: Beer;
  constructor(private beerTrackerService: BeerTrackerService, private uiService: UIService) { }

  ngOnInit() {
  }
  showBeerInfo(beer: Beer): void {
    this.beerTrackerService.showBeerInfoDialog(beer);
  }
  toggleCardOverlay(evt: any): void {
    const overlay = $(evt.currentTarget).parent().find('.overlay-container');
    overlay.toggle('fade', {}, 100);
  }
  toggleCompleteState(beer: Beer): void {
    if (!beer.completed === false) {
      this.uiService.showDialog('Confirm Action...', 'Are you sure you want to mark ' + beer.name + ' as incomplete?', (result) => {
        if (result === true) {
          this.beerTrackerService.toggleCompleteState(beer).then(data => {

          });
        }
      });
    } else {
      this.beerTrackerService.toggleCompleteState(beer).then(data => {

      });
    }
  }

}
