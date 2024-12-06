import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {
 submitted =false;
  constructor(private router:Router,private toastr:ToastrService,
    private ecommerce:EcommerceService,private fb:FormBuilder){
      localStorage.setItem("islogIn","false")
    }
  ngOnInit(): void {
this.loginForm = this.fb.group({
  username:[''],
  email:[''],
  password:['']
});
  }
  get f(){return this.loginForm.controls;}
  loginForm :FormGroup |any;
  logindata:any;
  Login(lData:NgForm){
    this.submitted = true;
    console.log(lData.value)
    this.logindata = lData.value
    this.ecommerce.getsellerData().
    subscribe(res=>{
    const seller = res.find((a :any)=>{
  return a.email ===  this.loginForm.value.email &&  a.password ===  this.loginForm.value.password
});


if (seller){
  localStorage.setItem("seller",JSON.stringify({seller}));
  localStorage.setItem("islogIn","true")
  this.router.navigate(['sellerhome'])

}else{
  this.toastr.error("Seller Not Found ")
 localStorage.setItem("islogIn","false")
}
if(this.loginForm.invalid){
  return;
}
const username =this.f.username.value;
if (username){
  localStorage.setItem('username',username);
  this.toastr.success("Welcome" + username);
  this.router.navigate(['sellerhome']);
}else{
  this.toastr.warning("invalid seller")
}
});


 
  }
  gotoSellersignup(){
  this.router.navigateByUrl('/sellersignup')
  }
}
