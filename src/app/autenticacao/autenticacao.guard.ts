import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard implements CanLoad {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly router: Router
  ) {}

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.usuarioService.estaLogado()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
