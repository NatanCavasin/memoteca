import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import Swal from 'sweetalert2';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought : Thought = {
    id: 0,
    content: '',
    autorship: '',
    model: 'modelo1'
  }

  constructor(private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }

  saveThought() {
    this.service.editar(this.thought).subscribe(() =>
       Swal.fire('Pensamento editado :)', '', 'success').then(() => this.router.navigate(['/listThoughts']))
    );
    
  }
  cancelThought() {
    Swal.fire({
      title: 'Edição cancelada',
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    this.router.navigate(['/listThoughts'])
  }

}
