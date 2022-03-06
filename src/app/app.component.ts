import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moments';
  useMoments = 'Todos os seus melhores momentos aqui!';
  userDate = {
    nome: 'Jonathan',
    sobrenome: 'Moreira de Andrade Barbosa',
    idade: 27,
    sexo: 'Masculino',
    email: 'jonathanjampamb@gmail.com'
  }
}
