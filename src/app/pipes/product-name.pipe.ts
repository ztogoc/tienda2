import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName',
  standalone: true
})
export class ProductNamePipe implements PipeTransform {
  transform(value: string): string {
    return value ? `★ ${value.toUpperCase()} ★` : '';
  }
}