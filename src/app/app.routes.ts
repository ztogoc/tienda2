import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PlantasComponent } from './pages/plantas/plantas.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Home'
  },
  { 
    path: 'products', 
    component: ProductsComponent,
    title: 'Products'
  },
  { 
    path: 'product/:slug/:id', 
    component: ProductDetailComponent,
    title: 'Product Details'
  },
  { 
    path: 'pruebas', 
    component: PruebasComponent,
    title: 'Testing Area'
  },
  { 
    path: '404', 
    component: NotFoundComponent,
    title: 'Page Not Found'
  },
  { 
    path: 'plantas', 
    component: PlantasComponent,
    title: 'Nuestras Plantas'
  },
  { 
    path: '**', 
    redirectTo: '404' 
  }
];
