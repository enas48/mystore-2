import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../models/Product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  amount:number =1;
  @Input() product:Product;

  constructor(private cartServices:CartService) { 
    this.product={
      id:1,
      name:'',
      url:'',
      description:'',
      price:1
    }
   }

  ngOnInit(): void {

  }
  submitForm(): void{
    const shoppingProduct=this.product;
    shoppingProduct.amount=this.amount;
    this.cartServices.addToCart(shoppingProduct);
    //  this.addToCart.emit();
    alert(`Added To Cart!`)  
    this.amount=1;
   
  }

}
