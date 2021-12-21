import { Comentario, Comentarios } from './comentarios';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private readonly httpClient: HttpClient) {}

  public buscaComentario(id: number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  public incluiComentario(
    id: number,
    commentText: string
  ): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
