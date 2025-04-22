import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { createUrlSlug } from '../../utils/url.utils';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, NgbRatingModule, RouterModule],
  template: `
    <article class="card product-card h-100">
      <a [routerLink]="['/product', createUrlSlug(product.title), product.id]" class="product-link">
        <img [src]="product.image" [alt]="product.title" class="card-img-top p-3">
      </a>
      <div class="card-body">
        <h3 class="card-title">
          <a [routerLink]="['/product', createUrlSlug(product.title), product.id]" class="product-title-link">
            {{ product.title }}
          </a>
        </h3>
        <div class="description-container">
          <p class="card-text description">
            {{ showFullText ? product.description : (product.description | slice:0:40) + (product.description.length > 40 ? '...' : '') }}
          </p>
          <button *ngIf="product.description.length > 40" 
                  class="btn read-more-btn" 
                  (click)="showFullText = !showFullText">
            {{ showFullText ? 'Leer menos' : 'Leer más...' }}
          </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <p class="price mb-0">€{{ product.price.toFixed(2) }}</p>
          <ngb-rating [rate]="product.rating.rate" [readonly]="true" [max]="5"></ngb-rating>
        </div>
        <button class="btn btn-primary w-100 mt-3" (click)="onAddToCart()">
          Añadir al carrito
        </button>
      </div>
    </article>
  `,
  styles: [`
    .card {
      border: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
    }
    .description-container {
      flex: 1;
      margin-bottom: 1rem;
      min-height: 100px;
    }
    .card-img-top {
      height: 250px;
      object-fit: contain;
      padding: 1rem;
      background: #f8f9fa;
    }
    .card-title {
      color: #2c5f2d;
      font-size: 1.2rem;
      height: 3rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      color: #4a7c4c;
      font-size: 1.3rem;
      font-weight: 600;
    }
    .btn-primary {
      background-color: #2c5f2d;
      border-color: #2c5f2d;
      padding: 0.5rem 1.5rem;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #4a7c4c;
      border-color: #4a7c4c;
      transform: scale(1.05);
    }
    .description {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    .description-container {
      margin-bottom: 1rem;
    }

    .description {
      margin-bottom: 0.5rem;
    }

    .read-more-btn {
      background-color: #e3f2fd;
      color: #0d6efd;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      border: none;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .read-more-btn:hover {
      background-color: #0d6efd;
      color: white;
    }
    .product-link {
      text-decoration: none;
      color: inherit;
    }
    .product-title-link {
      color: #2c5f2d;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  showFullText = false;
  createUrlSlug = createUrlSlug;  // Make the function available in the template

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }
}