import { Component } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-recuperar-senha",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./recuperar-senha.html",
  styleUrl: "./recuperar-senha.css"
})
export class RecuperarSenha {

  recuperarForm;

  constructor(private fb: FormBuilder) {

    this.recuperarForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });

  }

  recuperarSenha(): void {

    if (this.recuperarForm.invalid) {
      this.recuperarForm.markAllAsTouched();
      return;
    }

    const usuarioSalvo = localStorage.getItem("usuario");

    if (!usuarioSalvo) {
      alert("Nenhum usuário cadastrado.");
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    const emailDigitado = this.recuperarForm.value.email;

    if (emailDigitado === usuario.email) {

      alert(
        "E-mail encontrado! Sua senha é: " + usuario.senha
      );

    } else {

      alert(
        "Não encontramos nenhum usuário com esse e-mail."
      );

    }

  }

}