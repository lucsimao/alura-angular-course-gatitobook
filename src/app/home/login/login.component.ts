import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private readonly authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    this.authService.autentica(this.usuario, this.senha).subscribe({
      next: (result) => {
        console.log('Autenticado com sucesso' + result);
      },
      error: (error) => {
        alert('Usuario ou senha inválido');
        console.log(error);
      },
    });
  }
}
