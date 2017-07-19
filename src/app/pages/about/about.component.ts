import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // TODO: Clean this up. This is nonsense!
    // TODO: Replace jQuery animation with @keyframes animation
    $('#imageContainer').find('img').fadeIn('slow');
    const containers = $('.content-container');
    let delay = 500;
    for (let i = 0; i < containers.length; i++) {
      $(containers[i]).delay(delay).toggle('slide', { direction: 'left'}, 700, () => {
        $(containers[i]).closest('.content-row').find('img').delay(100).fadeIn(500);
      });
      delay += 500;
    }
  }
  navigate(url: string) {
    window.open(url, '_blank');
  }
}
