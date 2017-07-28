import { Component, OnInit } from '@angular/core';
import {UIService} from '../../shared-services/ui.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  public message: string = null;
  public visible: boolean = null;
  constructor(private _uiService: UIService) {
    this._uiService.overlayService$.subscribe(overlaySettings => {
      if (overlaySettings !== null) {
        if (overlaySettings.visible === true) {
          this.showOverlay(overlaySettings.message);
        } else if (overlaySettings.visible === false) {
          this.hideOverlay();
        }
      }
    });
  }

  ngOnInit() {
  }
  showOverlay(message: string): void {
    this.message = message;
    this.visible = true;
    $('#overlayContainer').fadeIn();
  }
  hideOverlay(): void {
    this.message = null;
    this.visible = false;
    $('#overlayContainer').fadeOut();
  }

}
