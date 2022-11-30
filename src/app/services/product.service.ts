import { Injectable } from '@angular/core';
import { Product } from '../core/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  productList: Product[] =
    [
      { id: "1", title: "skin care 1", price: 18, quantity: 0, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
      { id: "2", title: "skin care 2", price: 21, quantity: 10, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
      { id: "3", title: "skin care 3", price: 16, quantity: 8, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
    ]
  
  addProduct(product: Product) {
    this.productList.push(product);
  }
}
