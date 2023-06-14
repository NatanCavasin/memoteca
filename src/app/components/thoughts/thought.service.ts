import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thoughts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = ' http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(pag: number, filter: string, favorites: boolean): Observable<Thought[]>{
    const itensOfPage = 6;
    let params = new HttpParams()
    .set("_page", pag)
    .set("_limit", itensOfPage);

    if(filter.trim().length > 2){
      params = params.set("q", filter);
    }
    if(favorites){
      params = params.set("favorite", true);
    }
   // return this.http.get<Thought[]>(`${this.API}?_pages=${pag}&_limit=${itensOfPage}`);
   return this.http.get<Thought[]>(this.API, {params})
  }


  criar(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  editar(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  mudarFavorito(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.editar(thought);
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
