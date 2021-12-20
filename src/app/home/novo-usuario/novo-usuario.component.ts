import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { minusculoValidator } from './minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly novoUsuarioService: NovoUsuarioService,
    private readonly usuarioExisteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [
        '',
        [Validators.required, minusculoValidator],
        [this.usuarioExisteService.usuarioJaExiste()],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario);
  }
}
