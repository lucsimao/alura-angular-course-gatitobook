import { Component, OnInit } from '@angular/core';

import { Animais } from './../animais';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      console.log(userName);
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      });
    });
  }
}
