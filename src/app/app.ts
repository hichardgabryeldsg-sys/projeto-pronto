import { Component, signal } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
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
}