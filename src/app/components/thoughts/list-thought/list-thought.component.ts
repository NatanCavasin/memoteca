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
  currentPage: number = 1;
  isMoreThoughts: boolean = true;
  filter: string = '';

  constructor(private  service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar(this.currentPage, this.filter).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

  loadThoughts(){
    this.service.listar(++this.currentPage, this.filter).subscribe((thoughtList) => {
      this.thoughtList.push(...thoughtList);
      if (!thoughtList.length){
        this.isMoreThoughts = false;
      }
    });
  }

  searchThoughts(){
    this.currentPage = 1;
    this.isMoreThoughts = true;
    this.service.listar(this.currentPage, this.filter).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

}
