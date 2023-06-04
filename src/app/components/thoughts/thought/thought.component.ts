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
    model: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    return this.thought.content && this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

}
