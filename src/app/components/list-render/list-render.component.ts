import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';
  constructor(private ListService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} Anos!`;
    console.log(this.animalDetails);
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.ListService.remove(animal.id).subscribe();
  }

  getAnimals(): void{
    this.ListService.getAll().subscribe((animals) => {
      this.animals = animals
      console.log(this.animals);
    });
  }
}
