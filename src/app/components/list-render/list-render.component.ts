import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Nick', type: 'Cat', age: 1},
    { name: 'Nina', type: 'Cat', age: 2},
    { name: 'Marley', type: 'Dog', age: 7},
    { name: 'Lalá', type: 'Dog', age: 6},
    { name: 'Lyncou', type: 'Dog', age: 5},
  ]

  animalDetails = '';
  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} Anos!`;
    console.log(this.animalDetails);
  }

}
