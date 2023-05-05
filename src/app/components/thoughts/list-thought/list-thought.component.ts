import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thoughts';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  thoughtList: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
