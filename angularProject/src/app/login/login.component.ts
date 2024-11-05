import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  logindata:any
  login(logindata:NgForm){
    console.log(logindata.value)
  }
  gotoRegistraion(){
this.router.navigateByUrl('register')
  }
  }

