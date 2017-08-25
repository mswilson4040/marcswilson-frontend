import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
    $('#firstName').addClass('first-name-width', 500);
    $('.hidden-text').delay(1000).show('slide', {direction: 'left'}, 500, (e) => {
      $('#coverImage').fadeIn();
      $('#underline').delay(500).animate({backgroundColor: 'white'}, 500);
      $('#welcomeScreen').animate({color: 'white'}, 500);
    });
  }

}
