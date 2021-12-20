import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  public cadastraNovoUsuario(
    novoUsuario: NovoUsuario
  ): Observable<NovoUsuario> {
    return this.httpClient.post<NovoUsuario>(`${API}/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${API}/exists/${nomeUsuario}`);
  }
}
