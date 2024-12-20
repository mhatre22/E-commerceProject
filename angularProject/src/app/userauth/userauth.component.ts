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
  constructor(private userService:UserService,private router:Router){

  }

  ngOnInit(): void {
 this.userService.reloadUser();
  }

  usersignData:any;
  userSignup(usersignup: NgForm) {
     this.usersignData = usersignup.value;
    this.userService.userSignup(this.usersignData);
    this.router.navigateByUrl('/user-login');
  }

  opensignupUser(){
    this.router.navigateByUrl('user-login');
  }


  
}
