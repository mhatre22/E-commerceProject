import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/assets/Services/user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{
  constructor(private router:Router,private userService:UserService){

  }
  ngOnInit(): void {
   
  }
goToHome(){
  this.router.navigateByUrl('/home')
}
}
