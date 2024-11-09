import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  constructor(private router:Router, private toastr:ToastrService){

  }
  ngOnInit(): void {
    
  }
  userlogout(){
    localStorage.removeItem("user")
    localStorage.setItem("isLogin","flase");
    this.toastr.success("User have logged out successfully.");
    this.router.navigate(['/login'])

  }
}
