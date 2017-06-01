import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#firstName').delay(500).animate({width: 127}, 500);
    $('.hidden-text').delay(1000).show('slide', {direction: 'left'}, 500, (e) => {
      $('#coverImage').fadeIn();
      $('#welcomeScreen').animate({color: 'white'}, 500);
    });
  }
}
