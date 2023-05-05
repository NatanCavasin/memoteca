import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Pensamento } from '../thoughts';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought : Pensamento ={
    id: 1,
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
    Swal.fire({
      title: 'Pensamento cancelado :\'(',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  }

}
