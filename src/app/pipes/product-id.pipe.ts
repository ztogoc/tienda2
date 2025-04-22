import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productId',
  standalone: true
})
export class ProductIdPipe implements PipeTransform {
  transform(value: number): string {
    return `SKU-${value.toString().padStart(4, '0')}`;
  }
}