import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {
constructor(private sellerService:SellerService, private router:Router){}
  ngOnInit(): void {
   
  }
  logindata:any;
  goTosellerLogin(loginData:NgForm){
    console.log(loginData.value)
    this.logindata = loginData.value
 this.sellerService.sellerLogin(this.logindata);
  }
  opensignupUser(){
    this.router.navigateByUrl('seller-auth');
  }
}
