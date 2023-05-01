import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought ={
    id: '1',
    content: 'Aprendendo Angular',
    autorship: 'Dev',
    model: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveThought() {
    Swal.fire('Pensamento criado :)', '', 'success')
  }
  cancelThought() {
    Swal.fire('Pensamento cancelado :(', '', 'success')
  }

}
