import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../types/product.types";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    if (search.length === 0) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
