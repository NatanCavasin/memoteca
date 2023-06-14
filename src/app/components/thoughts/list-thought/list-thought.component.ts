import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

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
  favorites: boolean = false;
  favoriteList: Thought[] = [];
  title: string = 'Meu Mural';

  constructor(
    private service: ThoughtService, 
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.service.listar(this.currentPage, this.filter, this.favorites).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

  loadMoreThoughts(){
    this.service.listar(++this.currentPage, this.filter, this.favorites).subscribe((thoughtList) => {
      this.thoughtList.push(...thoughtList);
      if (!thoughtList.length){
        this.isMoreThoughts = false;
      }
    });
  }

  searchThoughts(){
    this.currentPage = 1;
    this.isMoreThoughts = true;
    this.service.listar(this.currentPage, this.filter, this.favorites).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

  reload(){
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listFavorites(){
    this.currentPage = 1;
    this.favorites = true;
    this.isMoreThoughts = true;
    this.title = 'Meus Favoritos';
    this.service.listar(this.currentPage, this.filter, this.favorites).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
      this.favoriteList = thoughtList;
    });
  }

}
