import { Component } from '@angular/core';
import { ProductCard, Produto } from '../../components/product-card/product-card';
import { cart } from '../../services/cart';
import { productsService } from '../../services/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  produtos: Produto[] = productsService.listar();

  constructor(private router: Router) {}

 atualizarFavorito(produto: Produto): void {
  productsService.alternarFavorito(produto.id);
  this.produtos = productsService.listar();
}

  adicionarAoCarrinho(produto: Produto): void {
    cart.adicionar(produto, 1);
    console.log('Adicionado ao carrinho:', produto);
  }

  verProduto(produto: Produto): void {
    this.router.navigate(['/product', produto.id]);
  }

}