import { ThoughtService } from './../thought.service';
import { Component, OnInit, Input } from '@angular/core';
import { Thought } from '../thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: '',
    autorship: '',
    model: '',
    favorite: false
  }


  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
  }

  widthThought(): string {
    return this.thought.content && this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

  alterFavoriteIcon(): string {
    return this.thought.favorite ? 'ativo' : 'inativo';
  }

  updateFavorite(): void {
    this.service.mudarFavorito(this.thought).subscribe();
  }

}
