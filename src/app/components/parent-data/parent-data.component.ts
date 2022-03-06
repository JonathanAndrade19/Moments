import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  @Input() nameMoments: string = '';

  @Input() listUser!: {
    nome: string;
    sobrenome: string;
    idade: number;
    sexo: string;
    email: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
