import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router){}
  registerdata:any
  register(registerdata:NgForm){
   console.log(registerdata.value)
   this.router.navigate(['/login'])
   
  }
}
