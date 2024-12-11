import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sellerLogin, sellersignup } from '../class/datatypes';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
issellerLoggIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router,private toster:ToastrService) {
     
   }
  sellerSignup(data:sellersignup){
   this.http.post('http://localhost:3000/seller',
    data,{observe:'response'}).subscribe((result)=>{
      this.issellerLoggIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigateByUrl('/sellerhome')
     console.log(result)
    })
   
  }

  sellerLogin(data:sellerLogin){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      {observe:'response'}).subscribe((result:any)=>{
        console.log(result)
        if(result && result.body.length){
          this.toster.success("Seller Login Success")
          localStorage.setItem('seller',JSON.stringify(result.body))
          this.router.navigateByUrl('/sellerhome')
        }else{
          this.toster.error("Seller Login Faild !!")
        }
      }

      )};

  reloadSeller(){
    if(localStorage.getItem('seller')){
    this.issellerLoggIn.next(true);
    this.router.navigateByUrl('/sellerhome')
    }
  }

}
