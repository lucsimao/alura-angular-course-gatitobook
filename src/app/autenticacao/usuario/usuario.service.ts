import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { TokenService } from './../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT(): void {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  public retornaUsuario(): Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }

  public salvaToken(token: string): void {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  public logout(): void {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  public estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
