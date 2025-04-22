import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCategory',
  standalone: true
})
export class ProductCategoryPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
}