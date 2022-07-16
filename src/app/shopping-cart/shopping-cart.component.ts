import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingProducts:Product[]=[];

  constructor(private cartServices:CartService) { }

  ngOnInit(): void {
    this.shoppingProducts=this.cartServices.getProductCart();
  }

}
