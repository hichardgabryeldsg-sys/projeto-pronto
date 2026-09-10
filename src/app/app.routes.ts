import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';


export const routes: Routes = [
  {
    path: '',
    component: Catalog
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cadastro',
    component: Cadastro
  },
  {
    path: 'product/:id',
    component: ProductDetail
  },
  {
    path: 'catalog',
    component: Catalog
  },
  {
    path: '**',
    redirectTo: ''
  }
];