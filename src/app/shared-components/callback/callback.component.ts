import {Component, OnDestroy, OnInit} from '@angular/core';
import {UIService} from '../../shared-services/ui.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit, OnDestroy {

  constructor(private _uiService: UIService) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
