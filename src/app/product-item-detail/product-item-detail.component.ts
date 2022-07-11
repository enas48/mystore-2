import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import { ActivatedRoute} from '@angular/router';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Product;
  constructor(private route: ActivatedRoute, private httpService:HttpService) { 
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

}
