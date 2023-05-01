import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: '',
    autorship: '',
    model: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    return this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

}
