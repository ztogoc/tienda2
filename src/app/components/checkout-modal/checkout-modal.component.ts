import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Finalizar Compra</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <div class="cart-summary">
        <h5>Resumen del Pedido</h5>
        <div class="cart-items-summary">
          <div *ngFor="let item of items" class="item-row">
            <span>{{ item.title }}</span>
            <span>{{ item.quantity }}x €{{ item.price }}</span>
          </div>
        </div>
        <div class="total-row">
          <strong>Total:</strong>
          <strong>€{{ getTotal() | number:'1.2-2' }}</strong>
        </div>
      </div>
      <form class="mt-4">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Dirección de envío</label>
          <textarea class="form-control" id="address" rows="3" required></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">Cancelar</button>
      <button type="button" class="btn btn-primary" (click)="onConfirm()">Confirmar Pedido</button>
    </div>
  `,
  styles: [`
    .cart-items-summary {
      margin: 1rem 0;
    }
    .item-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eee;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 2px solid #dee2e6;
    }
  `]
})
export class CheckoutModalComponent {
  @Input() items: CartItem[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  onConfirm() {
    // Here you would typically process the order
    console.log('Processing order...');
    this.activeModal.close('Order confirmed');
  }
}