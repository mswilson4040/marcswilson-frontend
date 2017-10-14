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
    const rect = element.nativeElement.getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
  }

}
