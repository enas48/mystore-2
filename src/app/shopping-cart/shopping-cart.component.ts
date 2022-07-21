import { Component, OnInit , DoCheck} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/Product';
import { Router } from '@angular/router';
import {PaymentService} from '../services/payment.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  fullname:string='';
  address:string='';
  credit:string='';
  id:number =1;
  shoppingProducts:Product[]=[];
  total=this.cartServices.totalCost();
  constructor(private cartServices:CartService, private paymentService:PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingProducts=this.cartServices.getProductCart();
  }

deleteProduct(product:Product):void {
 
    this.shoppingProducts=this.cartServices.deleteProductCart(product);
    this.total=this.cartServices.totalCost();
    alert('Producted deleted!');
  
};
updateProduct(product:Product){
     this.shoppingProducts = this.cartServices.updateProductCart(product);
     this.total=this.cartServices.totalCost();
}

submitPayment(): void{
  const payment ={
    fullname: this.fullname,
    total:this.total
  }
  const total=this.total;
  if(total !== '0.00'){
  this.paymentService.addPaymentInfo(payment);
  this.cartServices.deleteAllProducts();
  this.router.navigate(['/confirm']);
  }else{
    alert('you have no product in cart!')
  } 
}

}
