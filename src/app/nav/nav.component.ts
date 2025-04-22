import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, CartComponent, NgbDropdownModule, NgbCollapseModule],
  template: `
    <div class="cart-section" ngbDropdown>
      <button class="btn btn-outline-primary" ngbDropdownToggle>
        🛒 {{ (cartService.cartItems$ | async)?.length ? 
          'Carrito (' + getTotalItems() + ')' : 
          'Carrito' }}
      </button>
      <div class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
        <div class="p-3">
          <app-cart></app-cart>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">      
        <div class="container">
          <div class="nav-section">
            <button class="navbar-toggler" 
                    type="button" 
                    (click)="isMenuCollapsed = !isMenuCollapsed"
                    aria-controls="navbarContent" 
                    [attr.aria-expanded]="!isMenuCollapsed" 
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" 
                 id="navbarContent"
                 [ngbCollapse]="isMenuCollapsed">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="active">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/products" routerLinkActive="active">Todos los Productos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" routerLink="/pruebas" routerLinkActive="active">BackEnd Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/plantas" routerLinkActive="active">Plantas</a>
                </li>
              </ul>
            </div>
          </div>

         
        </div>
    </nav>
  `,
  styles: [`
    .cart-section {
      position: fixed !important;
      top: 1rem !important;
      right: 2rem !important;
      z-index: 1030 !important;
    }
    .navbar {
      padding: 1rem !important;
      background: white !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      margin-left:18em !important;
    }
    .container {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
    .nav-section {
      flex: 1 !important;
    }
    .cart-section {
      margin-left: 2rem !important;
    }
    .nav-link {
      color: #333 !important;
      font-weight: 500 !important;
      padding: 0.5rem 1rem !important;
    }
    .nav-link.active {
      color: #2c5f2d !important;
    }
    @media (max-width: 991px) {
      .container {
        flex-direction: column !important;
      }
      .navbar-collapse {
        margin-top: 1rem !important;
        text-align: center !important;
        margin-left: 2em !important;
      }
      .navbar {
        padding: 1rem !important;
        background: white !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        margin-left: 2em !important;
      }
      .nav-item {
        margin: 0.5rem 0 !important;
      }
      .cart-section {
        margin-left: 0 !important;
        margin-top: 1rem !important;
      }
    }
  `]
})
export class NavComponent {
  isMenuCollapsed = true;
  constructor(public cartService: CartService) {}

  getTotalItems(): number {
    let items: CartItem[] = [];
    this.cartService.cartItems$.subscribe(cartItems => items = cartItems);
    return items.reduce((total, item) => total + item.quantity, 0);
  }
}
