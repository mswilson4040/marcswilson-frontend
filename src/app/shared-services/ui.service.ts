import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UIService {
  public dialogService$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public overlayService$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  set dialogService(value: any) {
    this.dialogService$.next(value);
  }

  set overlayService(value: any) {
    this.overlayService$.next(value);
  }

  showDialog(title: string, message: string, callback: Function) {
    this.dialogService = { title: title, message: message, callback: callback };
  }
  showOverlay(message: string) {
    this.overlayService = {visible: true, message: message};
  }

  hideOverlay() {
    this.overlayService = {visible: false, message: ''};
  }
}
