import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Animais } from './animais';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './../autenticacao/token.service';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
