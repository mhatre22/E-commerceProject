import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent {
  constructor(private router:Router){}
  sellerlogindata:any
  sellerLogin(sellerlogindata:NgForm){
    console.log(sellerlogindata.value)
    this.router.navigateByUrl('/sellerhome')
  }
  gotoSellersignup(){
    this.router.navigateByUrl('/sellersignup')
  }
}
