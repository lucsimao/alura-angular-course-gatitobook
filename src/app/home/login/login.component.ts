import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private readonly authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autentica(this.usuario, this.senha).subscribe({
      next: () => {
        this.router.navigate(['animais']);
      },
      error: (error) => {
        alert('Usuario ou senha inválido');
        console.log(error);
      },
    });
  }
}
