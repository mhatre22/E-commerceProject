import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
   
  }
  userSignup(form: NgForm) {
    if (form.valid) {
      const formData = form.value; // Extract form data
      console.log('Form Data:', formData);
  }
  }
  opensignupUser(){
    this.router.navigateByUrl('user-auth');
  }
  goTosellerLogin(userlogin:NgForm){
console.log(userlogin);
this.router.navigateByUrl('userhome')
  }
}
