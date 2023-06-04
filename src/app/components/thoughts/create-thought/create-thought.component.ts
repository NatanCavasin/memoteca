import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought : Thought = {
    content: '',
    autorship: '',
    model: 'modelo1'
  }

  constructor(private service: ThoughtService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveThought() {
    this.service.criar(this.thought).subscribe(() =>
       Swal.fire('Pensamento criado :)', '', 'success').then(() => this.router.navigate(['/listThoughts']))
    );
    
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
