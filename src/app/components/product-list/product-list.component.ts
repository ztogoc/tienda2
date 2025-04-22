import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, NgbPaginationModule],
  template: `
    <main class="products-container">
      <section>
        <h2>Nuestros Productos</h2>
        <div class="products-grid">
          <app-product-item 
            *ngFor="let product of products" 
            [product]="product"
          ></app-product-item>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <ngb-pagination
            [collectionSize]="totalProducts"
            [(page)]="currentPage"
            [pageSize]="pageSize"
            (pageChange)="loadProducts()"
          ></ngb-pagination>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .products-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  pageSize = 8;
  totalProducts = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.totalProducts = products.length;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      this.products = products.slice(startIndex, startIndex + this.pageSize);
    });
  }
}