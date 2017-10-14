import { Component, ElementRef, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public inView = false;
  constructor(private _uiService: UIService, private _elementRef: ElementRef) {
    this._uiService.scrollService.subscribe( evt => {
      const inView = this._uiService.isElementInView(this._elementRef);
      if (inView === true) {
        console.log('in view');
        this.inView = true;
      } else {
        console.log('out of view');
        this.inView = false;
      }
    });
  }

  ngOnInit() {
  }
}
