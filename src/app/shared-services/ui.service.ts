import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayComponent } from '../shared-components/overlay/overlay.component';

@Injectable()
export class UIService {
  public overlayService$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public scrollService: EventEmitter<any> = new EventEmitter();

  set overlayService(value: any) {
    if (value !== null) {
      this.overlayService$.next(value);
    }
  }
  constructor(private _overlay: Overlay) {
  }

  showOverlay(message: string) {
    //this.overlayService = {visible: true, message: message};
    this.createOverlay();
  }
  hideOverlay() {
    this.overlayService = {visible: false, message: ''};
  }

  onScroll(evt: Event) {
    this.scrollService.emit(evt);
  }
  isElementInView(element: ElementRef): boolean {
    const percentVisible = 0.1;
    const bcr = element.nativeElement.getBoundingClientRect();
    const elemTop = bcr.top;
    const elemBottom = bcr.bottom;
    const elemHeight = bcr.height;
    const overhang = elemHeight * (1 - percentVisible);
    return (elemTop >= -overhang) && (elemBottom <= window.innerHeight + overhang);
  }
  createOverlay(): void {
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    const overlayRef = this._overlay.create(overlayConfig);
    const portal = new ComponentPortal(OverlayComponent);
    overlayRef.attach(portal);
    setTimeout( () => {
      this.disposeOverlay(overlayRef);
    }, 2000);
  }
  disposeOverlay(overlayRef: OverlayRef): void {
    overlayRef.dispose();
  }

}
