import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  thoughtList = [
    {
      content: 'Eu sou o Batman',
      autorship: 'Pai do Chris',
      model: 'modelo3'
    },
    {
      content: 'RouterLink <3',
      autorship: 'Me',
      model: 'modelo2'
    },
    {
      content: 'Comunicação entre componentesComunicação entre componentesComunicação entre componentesComunicaçãoComunicação entre componentes entre componentesComunicação entre componentesComunicaçãoComunicação entre componentesComunicação entre componentesComunicação entre componentes',
      autorship: 'Me',
      model: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
