import { Injectable } from '@angular/core';
import {Payment} from '../models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentInfo:Payment[]=[];

  constructor() { }
  addPaymentInfo(info:any){
    this.paymentInfo=[];
    this.paymentInfo.push(info);
    return  this.paymentInfo;
  }
  getPayemntInfo(){
    
    return this.paymentInfo;
   
  }
}
