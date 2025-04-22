import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent, CartComponent],
  template: `
    <header>
      <div class="container d-flex align-items-center">
        <h1>Tienda Online</h1>
        <app-nav></app-nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      background: #f8f9fa;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h1 {
      margin: 0;
      color: #333;
      font-size: 1.5rem;
    }
  `]
})
export class HeaderComponent {

}
