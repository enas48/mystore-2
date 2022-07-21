import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList:Product[] =[];

  constructor() { }
  getProductCart(){
    return this.productList;

  }
 
  addToCart(product:Product){
    this.productList.push(product);
    return this.productList;
  }
  incart (product:Product){
    const incart=   this.productList.filter((p)=>p.id===product.id);
    if (incart.length===0){
      return false;
    }
    return true;
    }

  deleteProductCart(product:Product){
    this.productList =this.productList.filter(p=> p.id !== product.id)
    return this.productList;
  }
  deleteAllProducts(){
    this.productList=[];
    return  this.productList;
  }

  totalCost(){
    let total=0;
    this.productList.forEach((p)=>{
      if (p.amount != undefined) {
      total += p.price * p.amount;
      }else{
      total += p.price 
      }
    })
    return total.toFixed(2);
  }

  updateProductCart(product:Product){
    const index =  this.productList.findIndex(object => {
      return object.id === product.id;
    });
  
    this.productList[index] = product;
    return  this.productList;
  }

}
