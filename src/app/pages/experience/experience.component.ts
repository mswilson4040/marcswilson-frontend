import { Component, ElementRef, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public inView = false;
  constructor(private _uiService: UIService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this._uiService.scrollService.subscribe( evt => {
      const inView = this._uiService.isElementInView(this._elementRef);
      if (inView === true) {
        this.inView = true;
      } else {
        this.inView = false;
      }
    });
  }

}
