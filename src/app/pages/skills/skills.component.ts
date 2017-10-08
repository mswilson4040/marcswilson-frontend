import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillValue = 0;
  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.skillValue = 100;
    }, 1000);
  }

}
