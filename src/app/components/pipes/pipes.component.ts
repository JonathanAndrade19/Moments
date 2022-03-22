import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  taxtoTest = 'Algum texto aqui!';
  MeuNomeE = 'olá meu nome é jonathan';
  today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
