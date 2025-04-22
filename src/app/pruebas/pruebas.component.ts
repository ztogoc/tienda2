import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProductNamePipe } from '../pipes/product-name.pipe';
import { StockStatusPipe } from '../pipes/stock-status.pipe';
import { ProductIdPipe } from '../pipes/product-id.pipe';
import { ProductDescriptionPipe } from '../pipes/product-description.pipe';
import { ProductCategoryPipe } from '../pipes/product-category.pipe';
import { ProductPricePipe } from '../pipes/product-price.pipe';
import { ProductListComponent } from '../components/product-list/product-list.component';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-ES');

interface CartItem {
  product: any;
  quantity: number;
}

@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [
    CommonModule, 
    ProductNamePipe, 
    StockStatusPipe,
    ProductIdPipe,
    ProductDescriptionPipe,
    ProductCategoryPipe,
    ProductPricePipe,
    ProductListComponent
  ],
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {
  currentDate = new Date();
  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  
  products = [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 1299.99,
      description: 'High performance gaming laptop with RTX 4060',
      stock: 10,
      createdAt: new Date('2024-01-15'),
      lastUpdated: new Date(),
      category: 'ELECTRONICS',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 2,
      name: 'Coffee Maker',
      price: 89.99,
      description: 'Professional grade coffee maker with built-in grinder',
      stock: 3,
      createdAt: new Date('2023-12-25'),
      lastUpdated: new Date(),
      category: 'home_appliances',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 299.99,
      description: 'Fitness tracking smartwatch with heart rate monitor',
      stock: 15,
      createdAt: new Date('2024-01-20'),
      lastUpdated: new Date(),
      category: 'ELECTRONICS',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 159.99,
      description: 'Noise cancelling bluetooth headphones',
      stock: 8,
      createdAt: new Date('2024-01-18'),
      lastUpdated: new Date(),
      category: 'ELECTRONICS',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 5,
      name: 'Air Fryer',
      price: 129.99,
      description: 'Digital air fryer with multiple cooking modes',
      stock: 4,
      createdAt: new Date('2024-01-10'),
      lastUpdated: new Date(),
      category: 'home_appliances',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 6,
      name: 'Gaming Mouse',
      price: 79.99,
      description: 'RGB gaming mouse with programmable buttons',
      stock: 20,
      createdAt: new Date('2024-01-05'),
      lastUpdated: new Date(),
      category: 'GAMING_ACCESSORIES',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      price: 149.99,
      description: 'RGB mechanical keyboard with Cherry MX switches',
      stock: 12,
      createdAt: new Date('2024-01-08'),
      lastUpdated: new Date(),
      category: 'GAMING_ACCESSORIES',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 8,
      name: 'Robot Vacuum',
      price: 399.99,
      description: 'Smart robot vacuum with mapping technology',
      stock: 6,
      createdAt: new Date('2024-01-12'),
      lastUpdated: new Date(),
      category: 'home_appliances',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 9,
      name: 'Gaming Chair',
      price: 249.99,
      description: 'Ergonomic gaming chair with lumbar support',
      stock: 7,
      createdAt: new Date('2024-01-14'),
      lastUpdated: new Date(),
      category: 'GAMING_ACCESSORIES',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 10,
      name: 'Blender',
      price: 69.99,
      description: 'High-speed blender for smoothies and shakes',
      stock: 9,
      createdAt: new Date('2024-01-16'),
      lastUpdated: new Date(),
      category: 'home_appliances',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 11,
      name: 'Gaming Console',
      price: 499.99,
      description: 'Next-gen gaming console with 4K support',
      stock: 5,
      createdAt: new Date('2024-01-19'),
      lastUpdated: new Date(),
      category: 'ELECTRONICS',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 12,
      name: 'Smart Speaker',
      price: 129.99,
      description: 'Voice-controlled smart speaker with premium sound',
      stock: 11,
      createdAt: new Date('2024-01-21'),
      lastUpdated: new Date(),
      category: 'ELECTRONICS',
      imageUrl: 'https://picsum.photos/200'
    }
  ];

  selectedProduct: any = null;
  searchTerm: string = '';
  selectedCategory: string = 'all';

  // Cart Functions
  addToCart(product: any): void {
    if (product.stock > 0) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id); 
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ product, quantity: 1 });
      }
      this.updateStock(product, +1);
      this.calculateTotal();
    }
  }

  removeFromCart(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      this.updateStock(item.product, 1);
      this.calculateTotal();
    }
  }

  clearCart(): void {
    this.cartItems.forEach(item => {
      this.updateStock(item.product, item.quantity);
    });
    this.cartItems = [];
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0);
  }

  // Store Functions
  filterProducts(): any[] {
    return this.products
      .filter(product => 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(product => 
        this.selectedCategory === 'all' || 
        product.category.toLowerCase() === this.selectedCategory.toLowerCase());
  }

  getCategories(): string[] {
    const categories = new Set(this.products.map(p => p.category.toLowerCase()));
    return ['all', ...Array.from(categories)];
  }

  // Existing Functions
  selectProduct(product: any): void {
    this.selectedProduct = product;
  }

  updateStock(product: any, amount: number): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index].stock += amount;
    }
  }

  // Helper Functions
  getStockStatus(product: any): string {
    if (product.stock <= 0) return 'Out of Stock';
    if (product.stock < 5) return 'Low Stock';
    return 'In Stock';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(price);
  }
}
