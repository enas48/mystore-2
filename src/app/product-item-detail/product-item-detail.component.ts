import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import { ActivatedRoute} from '@angular/router';
import {Product} from '../models/Product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Product;
  amount:number =1;
  constructor(private route: ActivatedRoute, private httpService:HttpService, private cartServices:CartService) { 
    this.product={ 
      id:1,
      name:'',
      url:'',
      description:'',
      price:1
    }
  }

  ngOnInit(): void {
   this.httpService.getProducts().subscribe((data)=>{
      let id  = parseInt(this.route.snapshot.params['id']);
      this.product= data.filter((p)=> p.id === id)[0];
  })

  }
  submitForm(): void{
    const shoppingProduct=this.product;
    shoppingProduct.amount=this.amount;
    const incart=this.cartServices.incart(shoppingProduct);
    if(incart){
     alert(`this item already in Cart!`);
    }else{
     this.cartServices.addToCart(shoppingProduct);
     alert(`Added To Cart!`);
     this.amount=1;
    }
   
  }

}
