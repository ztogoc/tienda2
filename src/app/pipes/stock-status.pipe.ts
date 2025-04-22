import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
  standalone: true
})
export class StockStatusPipe implements PipeTransform {
  transform(stock: number): string {
    if (stock <= 0) return '❌ Out of Stock';
    if (stock < 5) return '⚠️ Low Stock';
    if (stock < 10) return '✅ Medium Stock';
    return '🌟 In Stock';
  }
}