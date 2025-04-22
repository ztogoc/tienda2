import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product.interface';
import { CheckoutModalComponent } from '../components/checkout-modal/checkout-modal.component';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  template: `
    <div class="cart">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="mb-0">
          {{ (cartService.cartItems$ | async)?.length ? 
            'Carrito (' + getTotalItems() + ' artículos)' : 
            'Carrito' }}
        </h6>
        <button class="btn btn-sm btn-outline-danger" 
                (click)="clearCart()"
                [disabled]="!(cartService.cartItems$ | async)?.length">
          Vaciar carrito
        </button>
      </div>
      <div class="cart-items">
        <div *ngIf="(cartService.cartItems$ | async)?.length === 0" class="text-muted">
          No hay productos en el carrito
        </div>
        <div *ngFor="let item of cartService.cartItems$ | async" class="cart-item mb-2">
          <div class="d-flex justify-content-between align-items-center">
            <div class="flex-grow-1">
              <h6 class="mb-0">{{ item.title }}</h6>
              <small class="text-muted">€{{ item.price }} x {{ item.quantity }}</small>
            </div>
            <div class="d-flex align-items-center">
              <div class="btn-group me-2">
                <button class="btn btn-sm btn-outline-secondary" 
                        (click)="decreaseQuantity(item)"
                        [disabled]="item.quantity <= 1">-</button>
                <button class="btn btn-sm btn-outline-secondary" disabled>{{ item.quantity }}</button>
                <button class="btn btn-sm btn-outline-secondary" 
                        (click)="increaseQuantity(item)">+</button>
              </div>
              <button class="btn btn-sm btn-outline-danger" 
                      (click)="removeItem(item.id)">×</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-total mt-3">
        <p class="fw-bold mb-2">Total: €{{ getTotal() | number:'1.2-2' }}</p>
        <button class="btn btn-primary w-100" 
                [disabled]="!(cartService.cartItems$ | async)?.length"
                (click)="openCheckoutModal()">
          Checkout
        </button>
      </div>
    </div>
  `,
  styles: [`
    .cart-items {
      max-height: 300px;
      overflow-y: auto;
      min-width: 300px;
    }
    .cart-total {
      border-top: 1px solid #eee;
      padding-top: 1rem;
    }
    .cart-item {
      padding: 0.5rem;
      border-bottom: 1px solid #eee;
    }
    .cart-item:last-child {
      border-bottom: none;
    }
    .btn-outline-danger {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
  `]
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private modalService: NgbModal
  ) {}

  increaseQuantity(item: CartItem) {
    this.cartService.addToCart({ id: item.id, title: item.title, price: item.price } as Product);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item.id);
  }

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal(): number {
    let items: CartItem[] = [];
    this.cartService.cartItems$.subscribe(cartItems => items = cartItems);
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalItems(): number {
    let items: CartItem[] = [];
    this.cartService.cartItems$.subscribe(cartItems => items = cartItems);
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  openCheckoutModal() {
    const modalRef = this.modalService.open(CheckoutModalComponent, {
      size: 'lg',
      centered: true
    });
    this.cartService.cartItems$.subscribe(items => modalRef.componentInstance.items = items);

    modalRef.result.then(
      (result) => {
        if (result === 'Order confirmed') {
          // Clear cart after successful order
          this.cartService.clearCart();
        }
      },
      (reason) => {
        console.log('Modal dismissed');
      }
    );
  }
}
