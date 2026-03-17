import { Component, input } from '@angular/core';
import { Product } from './product.model';
import { ProductItem } from '../app/product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  products = input.required<Product[]>();

  removeProduct(id: number) {
    this.products().splice(
      this.products().findIndex(p => p.id === id),
      1
    );
  }
}