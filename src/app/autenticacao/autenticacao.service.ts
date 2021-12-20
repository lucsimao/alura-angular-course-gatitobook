import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';
import { environment } from './../../environments/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private readonly httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  public autentica(
    usuario: string,
    senha: string
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/user/login`,
        { userName: usuario, password: senha },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          console.log(authToken);
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
