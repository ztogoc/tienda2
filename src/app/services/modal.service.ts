import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartSuccessModalComponent } from '../components/cart-success-modal/cart-success-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  showCartSuccess() {
    this.modalService.open(CartSuccessModalComponent, {
      centered: true,
      animation: true
    });
  }
}