import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/assets/Services/user.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent implements OnInit {
  showLogin = true;
  constructor(private userService:UserService,private router:Router){

  }

  ngOnInit(): void {
    
  }


  userSignup(form: NgForm) {
    if (form.valid) {
      const formData = form.value; // Extract form data
      console.log('Form Data:', formData);
      this.router.navigateByUrl('user-login');
  }
  }
  opensignupUser(){
    this.router.navigateByUrl('user-login');
  }
}
