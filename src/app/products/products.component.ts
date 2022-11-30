import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../core/Product';
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
   x!: number
  constructor(private productService: ProductService,private CalculService:CalculService) { }

  ngOnInit(): void {
    this.products = this.productService.productList;
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

  getNumber() {
    this.x=this.CalculService.getNumberOf(this.products,"quantity",0);
  }

  
  

 

}
