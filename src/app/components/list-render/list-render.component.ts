import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Nick', type: 'Cat'},
    { name: 'Nina', type: 'Cat'},
    { name: 'Marley', type: 'Dog'},
    { name: 'Lalá', type: 'Dog'},
    { name: 'Lyncou', type: 'Dog'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
