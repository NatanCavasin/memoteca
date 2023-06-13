import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: ThoughtService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
                      Validators.required, 
                      Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autorship: ['',  Validators.compose([
                          Validators.required, 
                          Validators.pattern(/(.|\s)*\S(.|\s)*/), 
                          Validators.minLength(3)])],
      model: ['modelo1'],
      favorite: false
    })
  }

  saveThought() {
    if(this.form.valid){
      this.service.criar(this.form.value).subscribe(() =>
        Swal.fire('Pensamento criado :)', '', 'success').then(() => this.router.navigate(['/listThoughts']))
      );
    } 
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

  enableButton(): string{
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }

}
