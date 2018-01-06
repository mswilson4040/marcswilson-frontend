import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UIService } from '../../shared-services/ui.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, AfterViewChecked {
  public message: string = null;
  public visible = false;
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _uiService: UIService) {

  }

  ngOnInit() {
    this._uiService.overlayService.subscribe( overlaySettings => {
      if (overlaySettings) {
        this.message = overlaySettings.message;
        this.visible = true;
      } else {
        this.message = null;
        this.visible = false;
      }
    });
  }
  ngAfterViewChecked(): void {
    // this._changeDetectorRef.detectChanges();
  }

}
