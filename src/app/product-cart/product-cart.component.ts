import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  amount:any;
  @Input() product:Product;
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter;
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter;


  constructor() {
    this.product={
      id:1,
      name:'',
      url:'',
      description:'',
      price:1
    }
   }

  ngOnInit(): void {
    this.amount=this.product.amount;
  }
  onChange(value:any) {
    this.amount=value;
    let amount=this.amount;
    if(amount ==0){
      this.deleteProduct.emit(this.product);
    }
    const updatedProduct=this.product;
    updatedProduct.amount= amount;
    this.updateProduct.emit(updatedProduct);
};
}
