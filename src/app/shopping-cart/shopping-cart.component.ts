import { Component, OnInit , DoCheck} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  id:number =1;
  shoppingProducts:Product[]=[];
  total=this.cartServices.totalCost();
  constructor(private cartServices:CartService) { }

  ngOnInit(): void {
    this.shoppingProducts=this.cartServices.getProductCart();
  }

deleteProduct(product:Product):void {
 
    this.shoppingProducts=this.cartServices.deleteProductCart(product);
    this.total=this.cartServices.totalCost();
    alert('Producted deleted');
  
};
updateProduct(product:Product){
     this.shoppingProducts = this.cartServices.updateProductCart(product);
     this.total=this.cartServices.totalCost();
}

}
