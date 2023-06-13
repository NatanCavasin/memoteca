import { Component, OnInit } from '@angular/core';
import { Thought } from '../thoughts';
import Swal from 'sweetalert2';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id : [thought.id],
        content: [thought.content, Validators.compose([
                        Validators.required, 
                        Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        autorship: [thought.autorship,  Validators.compose([
                            Validators.required, 
                            Validators.pattern(/(.|\s)*\S(.|\s)*/), 
                            Validators.minLength(3)])],
        model: [thought.model],
        favorite: [thought.favorite]
      })
    })
     
  }

  saveThought() {
    this.service.editar(this.form.value).subscribe(() =>
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

  enableButton(): string{
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }

}
