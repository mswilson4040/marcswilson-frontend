import { Component, ElementRef, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public javaScript = 0;
  public typeScript = 0;
  public angular = 0;
  public jQuery = 0;
  public node = 0;
  public html = 0;
  public css = 0;
  public scss = 0;
  public bootstrap = 0;
  public angularMaterial = 0;

  constructor(private _uiService: UIService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this._uiService.scrollService.subscribe( evt => {
      const inView = this._uiService.isElementInView(this._elementRef);
      if (inView === true) {
        this.setSkills(false);
      } else {
        this.setSkills(true);
      }
    });
  }
  setSkills(setToZero: boolean): void {
    setTimeout( () => {
      if (setToZero) {
        this.javaScript = 0;
        this.typeScript = 0;
        this.angular = 0;
        this.jQuery = 0;
        this.node = 0;
        this.html = 0;
        this.css = 0;
        this.scss = 0;
        this.bootstrap = 0;
        this.angularMaterial = 0;
      } else {
        this.javaScript = 90;
        this.typeScript = 90;
        this.angular = 90;
        this.jQuery = 90;
        this.node = 60;
        this.html = 90;
        this.css = 75;
        this.scss = 70;
        this.bootstrap = 90;
        this.angularMaterial = 70;
      }
    }, 700);
  }

}
