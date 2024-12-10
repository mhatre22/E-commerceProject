import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl:'./seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = true;
  constructor(private router:Router,private sellerService:SellerService){

  }
  ngOnInit(): void {
    this.sellerService.reloadSeller()
  }
  sellerdata:any;
  sellerSignup(sellerData:NgForm){
   this.sellerdata = sellerData.value
   this.sellerService.sellerSignup(this.sellerdata);
  }
  logindata:any;
  goTosellerLogin(loginData:NgForm){
    console.log(loginData.value)
    this.logindata = loginData.value
 this.sellerService.sellerLogin(this.logindata);
  }

  opensignupSignup(){
    this.showLogin = false;
  }
  openloginSeller(){
    this.showLogin = true;
  }
}
