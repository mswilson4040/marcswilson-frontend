import { Component, ElementRef, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillValue = 0;
  constructor(private _uiService: UIService, private _elementRef: ElementRef) { }

  ngOnInit() {
    // setTimeout( () => {
    //   this.skillValue = 85;
    // }, 1000);
    this._uiService.scrollService.subscribe( evt => {
      const inView = this._uiService.isElementInView(this._elementRef);
      if (inView === true) {
        this.skillValue = 85;
      } else {
        this.skillValue = 0;
      }
    })
  }

}
