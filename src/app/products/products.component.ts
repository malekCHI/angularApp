import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: "1", title: "skin care 1", price: 18, quantity: 0, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
      { id: "2", title: "skin care 2", price: 21, quantity: 10, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
      { id: "3", title: "skin care 3", price: 16, quantity: 8, like: 0, picture: "http://cdn.shopify.com/s/files/1/1920/3889/collections/OMC_Oh-My-Cream-Skincare_1000x1417_50413929-b0d4-49f1-b8c0-8b76c326c3d6_grande.jpg?v=1660147121" },
    ]
  }
  
  Buy(id:string){
  //this.products.map((product)=>{
    //if(product.id.match(id)) {
      //product.quantity=product.quantity-1;
    //}
  //})
  this.products.map((product)=>product.id.match(id)?product.quantity--:'product not found')
  //ki nebda bech na3mlou traitement sans else tkoun haka:
  //this.products.map((product)=>product.id.match(id)&&product.quantity--)
 }

 

}
