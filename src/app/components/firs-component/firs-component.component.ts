import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firs-component',
  templateUrl: './firs-component.component.html',
  styleUrls: ['./firs-component.component.scss']
})
export class FirsComponentComponent implements OnInit {
  nomeTitulo: string = "Bem Vindo ao Moments";
  constructor() { }

  ngOnInit(): void {
  }

}
