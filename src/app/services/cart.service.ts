import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ModalService } from './modal.service';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private modalService: ModalService) {}

  addToCart(product: Product) {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cartItems.next([...currentItems]);
    } else {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      };
      this.cartItems.next([...currentItems, newItem]);
    }
    
    // Show success modal
    this.modalService.showCartSuccess();
  }

  decreaseQuantity(itemId: number) {
    const currentItems = this.cartItems.getValue();
    const item = currentItems.find(item => item.id === itemId);
    
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.cartItems.next([...currentItems]);
    }
  }

  removeItem(itemId: number) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(item => item.id !== itemId));
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}