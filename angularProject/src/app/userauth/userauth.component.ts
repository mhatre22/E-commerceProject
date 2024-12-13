import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/assets/Services/user.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent implements OnInit {
  constructor(private userService:UserService){

  }
  showLogin = true;
  ngOnInit(): void {
    
  }
  sellerdata:any;
  userSignup(sellerData:NgForm){
   this.sellerdata = sellerData.value
  
  }
  logindata:any;
  goTouserLogin(loginData:NgForm){
    console.log(loginData.value)
    this.logindata = loginData.value

  }

  opensignupUser(){
    this.showLogin = false;
  }
  openloginUser(){
    this.showLogin = true;
  }



}
