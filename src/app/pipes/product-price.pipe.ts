import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice',
  standalone: true
})
export class ProductPricePipe implements PipeTransform {
  transform(value: number, showDiscount: boolean = false): string {
    const formattedPrice = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
    
    if (showDiscount && value > 1000) {
      const discountPrice = value * 0.9;
      return `${formattedPrice} (10% off: ${this.transform(discountPrice)})`;
    }
    return formattedPrice;
  }
}