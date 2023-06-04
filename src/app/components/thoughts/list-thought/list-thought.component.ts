import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  thoughtList: Thought[] = [];

  constructor(private  service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

}
