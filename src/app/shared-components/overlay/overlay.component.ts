import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, AfterViewChecked {
  public message: string = null;
  public visible: boolean = null;
  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this._changeDetectorRef.detectChanges();
  }
  showOverlay(message: string): void {

  }
  hideOverlay(): void {

  }

}
