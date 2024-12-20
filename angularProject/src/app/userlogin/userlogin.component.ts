import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/assets/Services/product.service';
import { UserService } from 'src/assets/Services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  constructor(private router:Router,private userService:UserService,private productService:ProductService){}
  ngOnInit(): void {
    this.userService.reloadUser();
  }

  opensignupUser(){
    this.router.navigateByUrl('user-auth');
  }
  logindata:any;
  goToUserLogin(loginData:NgForm){
    console.log(loginData)
    this.logindata = loginData.value
   this.userService.userLogin(this.logindata);
  

  
  }

  
  }
