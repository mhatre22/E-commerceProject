import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart, product, userLogin, userSignup } from '../class/datatypes';
import { BehaviorSubject, observeOn } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService,
    private productService:ProductService
  ) { }
  isuserLoggIn = new BehaviorSubject<boolean>(false);
  userSignup(data:userSignup){
   this.http.post('http://localhost:3000/user',data,{observe:'response'}).subscribe((result)=>{
    localStorage.setItem('user',JSON.stringify(result.body))
    this.router.navigateByUrl("user-login");
    console.log(result);
   });
  }

  userLogin(data:userLogin){
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
{observe :'response'}).subscribe((result:any)=>{
  console.log(result);
  if(result && result.body.length){
    this.toster.success("User Login Success !!")
    localStorage.setItem('user',JSON.stringify(result.body));
    this.router.navigateByUrl("/");

  }else{
    this.toster.error("User Login Faild !!")
    this.localCartToRemoteCart();
  }
});

}
reloadUser(){
 if(localStorage.getItem('user')){
  this.isuserLoggIn.next(true);
  this.router.navigateByUrl("/");
 }
}
localCartToRemoteCart(){
  let data = localStorage.getItem('localcart');
  if(data){
     let cartDatalist:product[] = JSON.parse(data)
    let user =localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;

      cartDatalist.forEach((product:product,index)=>{
        let cartData :cart ={
          ...product,
          productId:product.id,
          userId
        }
        delete cartData.id;
   setTimeout(() => {
    this.productService.addtoCart(cartData).subscribe((result)=>{
      if(result){
        console.log("Items Stored in DataBase");
      }

    })
    if(cartDatalist.length === index +1){
      localStorage.removeItem('localCart');
    }
   }, 500);
      });
  }

}
}