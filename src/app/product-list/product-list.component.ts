import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Product} from '../models/Product';
import {Router} from "@angular/router"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] =[];

  constructor(private httpService:HttpService, private router:Router) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data=>{
       this.products=data;
    })
  }
  onSelect(product:any){
    this.router.navigate(['/products', product.id])
  }
}
