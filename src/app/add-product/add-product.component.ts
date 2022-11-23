import { Component, OnInit } from '@angular/core';
import { Product } from '../core/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Product;

  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
  }

  Ajouter() {
    console.log(this.product)
  }

}
