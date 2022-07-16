import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList:Product[] =[];

  constructor() { }
  getProductCart(){
    console.log(this.productList);
    return this.productList;

  }
 
  addToCart(product:Product){
    this.productList.push(product);
    return this.productList;
  }

  deleteProductCart(product:Product){
    const deletedProduct=this.productList.filter((p)=>{
      return p.id !== product.id;
    })
    this.productList = deletedProduct;
    return this.productList;
  }
}
