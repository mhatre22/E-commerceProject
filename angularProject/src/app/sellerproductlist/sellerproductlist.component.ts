import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellerproductlist',
  templateUrl: './sellerproductlist.component.html',
  styleUrls: ['./sellerproductlist.component.css']
})
export class SellerproductlistComponent implements OnInit {
  constructor(private ecommerce:EcommerceService,private toster:ToastrService,private router:Router){}
  productList:undefined|product[]
  ngOnInit(): void {
  this.ecommerce.getProduct().subscribe(data=>{
    console.log(data);
    this.productList= data;
  })
  }


}
