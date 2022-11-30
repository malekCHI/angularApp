import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../core/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!:string
  product!: Product;

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.product=new Product();
  }

  Ajouter(f: NgForm) {
    this.productService.addProduct(this.product)
    this.router.navigateByUrl('/products')
    console.log(this.product);
  }

}
