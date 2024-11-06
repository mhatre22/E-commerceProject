import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})
export class SellersignupComponent {
  constructor(private router:Router){}
  sellerSignupdata:any
  sellerSignup(sellerSignupdata:NgForm){
   console.log(sellerSignupdata.value)
   this.router.navigate(['/sellerlogin'])
   
  }
}
