import { Component } from '@angular/core';
import { cart, CarrinhoItem } from '../../services/cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartPage {
  items: CarrinhoItem[] = [];

  constructor() {
    this.reload();
  }

  reload(): void {
    this.items = cart.listar();
  }

  incrementar(item: CarrinhoItem): void {
    cart.adicionar(item.produto, 1);
    this.reload();
  }

  decrementar(item: CarrinhoItem): void {
    cart.alterarQuantidade(item.produto.id, item.quantidade - 1);
    this.reload();
  }

  remover(item: CarrinhoItem): void {
    cart.remover(item.produto.id);
    this.reload();
  }

  subtotal(): number {
    return cart.subtotal();
  }

  finalizar(): void {
    console.log('Finalizando compra:', cart.listar());
    cart.limpar();
    this.reload();
  }

}
