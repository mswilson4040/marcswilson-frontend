import { ElementRef, EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UIService {

  public scrollService: EventEmitter<any> = new EventEmitter();
  public overlayService: EventEmitter<{ id: string, message: string }> = new EventEmitter();
  public overlayQueue: { id: string, message: string }[] = [];

  constructor() {
  }

  createOverlay(message: string): string {
    const prefix = 'gen_id_';
    const id = new Date().getTime();
    const overlayId = `${prefix}${id}`;
    const overlaySettings = { id: overlayId, message: message };
    if (this.overlayQueue.length === 0) {
      this.showOverlay(overlaySettings);
    }
    this.overlayQueue.push( overlaySettings );
    return overlayId;
  }
  showOverlay(settings: { id: string, message: string }): void {
    this.overlayService.emit(settings);
  }
  destroyOverlay(overlayId: string): void {
    this.overlayQueue = this.overlayQueue.filter( o => o.id !== overlayId );
    if (this.overlayQueue.length === 0) {
      this.overlayService.emit(null);
    } else {
      this.overlayService.emit(this.overlayQueue[0]);
    }
  }
  updateOverlay(settings: { id: string, message: string }): void {
    const overlay = this.overlayQueue.find( o => o.id === settings.id );
    if (overlay) {
      overlay.message = settings.message;
      this.overlayService.emit(this.overlayQueue[0]);
    }
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
  scrollToElement(elementRef: ElementRef): void {
    elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
