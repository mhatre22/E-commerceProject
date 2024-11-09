import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService,
    private ecommerce:EcommerceService,private fb:FormBuilder){
      localStorage.setItem("islogIn","false")
    }
  ngOnInit(): void {
this.loginForm = this.fb.group({
  email:[''],
  password:['']
});

  }
  loginForm :FormGroup |any;
  logindata:any
  Login(lData:FormGroup){
    console.log(lData.value)
    this.logindata = lData.value
    this.ecommerce.getsellerData().
    subscribe(res=>{
    const seller = res.find((a :any)=>{
  return a.email ===  this.loginForm.value.email &&  a.password ===  this.loginForm.value.password
});

if (seller){
  this.toastr.success("SellerLogin SucessFully!!")
  localStorage.setItem("seller",JSON.stringify({seller}));
  localStorage.setItem("islogIn","true")
  this.router.navigate(['sellerhome'],)
}else{
  this.toastr.error("Seller Not Found ")
localStorage.setItem("islogIn","false")

}
});
 
  }
  gotoSellersignup(){
  this.router.navigateByUrl('/sellersignup')
  }
}
