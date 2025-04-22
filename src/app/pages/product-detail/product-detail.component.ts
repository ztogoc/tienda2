import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRatingModule],
  template: `
    <div class="container py-5" *ngIf="product">
      <div class="row">
        <div class="col-md-6">
          <img [src]="product.image" [alt]="product.title" class="img-fluid product-image">
        </div>
        <div class="col-md-6">
          <h1>{{ product.title }}</h1>
          <p class="price">{{ product.price | currency:'EUR' }}</p>
          <ngb-rating [rate]="product.rating.rate" [readonly]="true" [max]="5"></ngb-rating>
          <span class="ms-2">({{ product.rating.count }} reviews)</span>
          <p class="description mt-4">{{ product.description }}</p>
          <p class="category">Category: {{ product.category | titlecase }}</p>
          <button class="btn btn-primary btn-lg w-100" (click)="addToCart()">
            Add to Cart - {{ product.price | currency:'EUR' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-image {
      max-height: 500px;
      object-fit: contain;
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
    }
    .price {
      font-size: 2rem;
      color: #2c5f2d;
      font-weight: bold;
      margin: 1rem 0;
    }
    .description {
      line-height: 1.6;
      color: #666;
    }
    .category {
      color: #666;
      font-style: italic;
    }
    .btn-primary {
      background-color: #2c5f2d;
      border-color: #2c5f2d;
      padding: 1rem 2rem;
      transition: all 0.3s ease;
      margin-top: 2rem;
    }
    .btn-primary:hover {
      background-color: #4a7c4c;
      border-color: #4a7c4c;
      transform: translateY(-2px);
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productService.getProduct(id).subscribe(
        product => this.product = product,
        error => {
          console.error('Product not found');
          // Handle error, maybe redirect to 404 page
        }
      );
    });
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}