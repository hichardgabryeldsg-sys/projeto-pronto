import { RouterLink } from "@angular/router";
import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  entrar(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      alert('Nenhum usuário cadastrado.');
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);
    const dados = this.loginForm.value;

    if (
      dados.email === usuario.email &&
      dados.senha === usuario.senha
    ) {
      localStorage.setItem('logado', 'true');

      window.dispatchEvent(new Event('storage'));

      alert('Login realizado com sucesso!');

      this.router.navigate(['/']);
    } else {
      alert('E-mail ou senha incorretos.');
    }
  }
}