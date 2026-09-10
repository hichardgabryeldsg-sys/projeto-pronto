import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  favorito: boolean;
}

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  produto = input.required<Produto>();

  favoritoAlterado = output<Produto>();
  adicionar = output<Produto>();
  added = false;
  ver = output<Produto>();

  favoritar(): void {
    const produto = this.produto();

    produto.favorito = !produto.favorito;

    this.favoritoAlterado.emit(produto);
  }

  adicionarAoCarrinho(): void {
    const produto = this.produto();
    this.adicionar.emit(produto);
    this.added = true;
    setTimeout(() => (this.added = false), 900);
  }

  verDetalhe(): void {
    const produto = this.produto();
    this.ver.emit(produto);
  }

}