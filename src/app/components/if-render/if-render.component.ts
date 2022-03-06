import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;

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
