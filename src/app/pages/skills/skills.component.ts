import { Component, ElementRef, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillValues: Object = this.setSkills(true);
  constructor(private _uiService: UIService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this._uiService.scrollService.subscribe( evt => {
      const inView = this._uiService.isElementInView(this._elementRef);
      if (inView === true) {
        this.skillValues = this.setSkills(false);
      } else {
        this.skillValues = this.setSkills(true);
      }
    });
  }
  setSkills(setToZero: boolean): Object {
    if (setToZero) {
      return {
        javaScript: 0,
        typeScript: 0,
        angular: 0,
        jQuery: 0,
        node: 0,
        html: 0,
        css: 0,
        scss: 0,
        bootstrap: 0,
        angularMaterial: 0
      };
    } else {
      return {
        javaScript: 90,
        typeScript: 90,
        angular: 90,
        jQuery: 90,
        node: 60,
        html: 90,
        css: 75,
        scss: 70,
        bootstrap: 90,
        angularMaterial: 70
      };
    }
  }

}
