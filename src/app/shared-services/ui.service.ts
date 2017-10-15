import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UIService {
  public overlayService$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public scrollService: EventEmitter<any> = new EventEmitter();

  set overlayService(value: any) {
    if (value !== null) {
      this.overlayService$.next(value);
    }
  }
  constructor() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  showOverlay(message: string) {
    this.overlayService = {visible: true, message: message};
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

}
