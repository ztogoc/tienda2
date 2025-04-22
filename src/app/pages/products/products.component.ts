import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <main class="products-page">
      <div class="container">
        <h1>Catálogo Completo</h1>
        <p class="lead">Explora nuestra colección completa de productos</p>
        <app-product-list></app-product-list>
      </div>
    </main>
  `,
  styles: [`
    .products-page {
      padding: 2rem 0;
    }
    h1 {
      color: #333;
      margin-bottom: 0.5rem;
    }
    .lead {
      color: #666;
      margin-bottom: 2rem;
    }
    :host ::ng-deep {
      .card {
        height: 100% !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .card-body {
        flex: 1 !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .card-img-top {
        height: 18em !important;
        object-fit: contain !important;
        padding: 1rem !important;
        background: #f8f9fa !important;
      }
      .products-grid {
        display: grid !important;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
        gap: 2rem !important;
      }
      .product-card {
        height: 100% !important;
      }
    }
  `]
})
export class ProductsComponent {}