import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UIService {
  public overlayService$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  set overlayService(value: any) {
    if (value !== null) {
      this.overlayService$.next(value);
    }
  }

  showOverlay(message: string) {
    this.overlayService = {visible: true, message: message};
  }

  hideOverlay() {
    this.overlayService = {visible: false, message: ''};
  }
}
