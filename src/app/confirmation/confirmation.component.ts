import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../services/payment.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  paymentInfo:any;

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.paymentInfo=this.paymentService.getPayemntInfo()[0];
  }

}
