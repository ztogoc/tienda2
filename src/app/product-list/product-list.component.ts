import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgFor is already included in CommonModule, no need for separate import

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="products-container">
      <section>
        <h2>Productos</h2>
        <div class="products-grid">
          <article class="product-card" *ngFor="let i of [1,2,3,4]">
            <img src="https://via.placeholder.com/200" alt="Product">
            <h3>Producto {{i}}</h3>
            <p>€99.99</p>
            <button class="add-to-cart">Añadir al carrito</button>
          </article>
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
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .product-card {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .product-card img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .add-to-cart {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
    }
    .add-to-cart:hover {
      background: #0056b3;
    }
  `]
})
export class ProductListComponent {}
