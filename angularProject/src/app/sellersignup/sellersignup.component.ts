import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})
export class SellersignupComponent implements OnInit {
  sellerSignupdata: any;
  constructor(private router:Router,private toster:ToastrService,
    private fb :FormBuilder,private ecommerce:EcommerceService){
      localStorage.setItem("isSignup","false")
    }
  
  ngOnInit(): void {
    this.sellerSignupForm =this.fb.group({
      username:[''],
      email:[''],
      contact:[''],
      address: [''],
      company:[''],
      product:[''],
      password:[''],
      Confirmpassword:['']
    })
  }
  sellerSignupForm :FormGroup|any;
  Signupdata:any;
  Signup(Signupdata:NgForm){
    console.log(Signupdata.value)
    this.sellerSignupdata = Signupdata.value
    this.ecommerce.postsellerData(this.sellerSignupdata).subscribe((data)=>{
      console.log(data)
      localStorage.setItem("isSignup","true")
      this.toster.success("Seller-Signup SucessFully!!")
      this.router.navigate(['/sellerlogin'])
    },err=>{
      this.toster.error("Something Went Wrong!!")
      localStorage.setItem("isSignup","false")
    }

  );
}
  goTosellerlogin(){
    this.router.navigate(['sellerlogin'])
  }
  }

