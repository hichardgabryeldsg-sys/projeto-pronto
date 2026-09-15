import { Component, signal } from "@angular/core";
import { RouterOutlet, RouterLink, Router } from "@angular/router";
import { Login } from "./login/login";
import { Cadastro } from "./cadastro/cadastro";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, Login, Cadastro],
  templateUrl: "./app.html",
  styleUrl: "./app.css"
})
export class App {

  protected readonly title = signal("pet-shop");

  logado = false;

  constructor(private router: Router) {

    this.verificarLogin();

    window.addEventListener("loginAlterado", () => {
      this.verificarLogin();
    });

  }

  verificarLogin(): void {
    this.logado = localStorage.getItem("logado") === "true";
  }

  sair(): void {

    localStorage.removeItem("logado");

    window.dispatchEvent(new Event("loginAlterado"));

    this.router.navigate(["/"]);

  }

}