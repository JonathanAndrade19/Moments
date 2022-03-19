import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  size = 20;
  font = 'Arial';
  red = 'red';

  classes = ['small-title','light-blue-title']
  constructor() { }

  ngOnInit(): void {
  }

}
