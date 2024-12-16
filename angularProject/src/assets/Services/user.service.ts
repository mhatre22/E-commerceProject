import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin, userSignup } from '../class/datatypes';
import { BehaviorSubject, observeOn } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient,private router:Router,private toster:ToastrService) { }
  isuserLoggIn = new BehaviorSubject<boolean>(false);

 
  userSignup(data:userSignup){
   this.http.post('http://localhost:3000/user',data,{observe:'response'}).subscribe((result)=>{
    this.isuserLoggIn.next(true);
    localStorage.setItem('user',JSON.stringify(result.body))
    this.router.navigateByUrl('user-login');
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
  }
});

}
reloadUser(){
 if(localStorage.getItem('user')){
  this.isuserLoggIn.next(true);
  this.router.navigateByUrl("/");
 }
}
}