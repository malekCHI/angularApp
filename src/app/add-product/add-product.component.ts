import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../core/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!:string
  product!: Product;

  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
  }

  Ajouter(f:NgForm) {
    console.log(this.product);
  }

}
