import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>Productos Premium</h1>
        <p class="subtitle">Descubre nuestra selección de productos exclusivos</p>
      </div>
      <div class="featured-products">
        <div class="products-grid">
          <app-product-item 
            *ngFor="let product of topProducts" 
            [product]="product"
          ></app-product-item>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep .card-img-top {
      max-height: 18em;
      object-fit: contain;
      padding: 1rem;
    }
  `]
})
export class HomeComponent implements OnInit {
  topProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      // Get only the 6 most expensive products
      this.topProducts = products
        .sort((a, b) => b.price - a.price)
        .slice(0, 6);
    });
  }
}