import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Latest Apple smartphone',
      price: 500000,
      rating: 4.8,
      image: 'IMAGE_URL',
      images: ['IMG1','IMG2','IMG3'],
      link: 'https://kaspi.kz/...',
      likes: 0,
      categoryId: 1
    },


  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}