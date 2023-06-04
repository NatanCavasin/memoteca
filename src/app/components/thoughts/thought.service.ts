import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = ' http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Thought[]>{
    return this.http.get<Thought[]>(this.API);
  }

  criar(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  editar(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  excluir(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  buscarPorId(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
