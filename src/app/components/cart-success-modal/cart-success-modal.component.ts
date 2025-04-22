import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-success-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">¡Enhorabuena!</h4>
      <button type="button" class="btn-close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <p>Ha añadido un nuevo artículo a su carrito de compras</p>
      <p class="text-muted fst-italic">(Recuerda oniómano, no te lo gastes todo)!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="activeModal.close()">Entendido</button>
    </div>
  `
})
export class CartSuccessModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}