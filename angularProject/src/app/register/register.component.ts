import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm :FormGroup |any;
  constructor(private router:Router,private ecommerce:EcommerceService,private fb:FormBuilder,
    private toastr: ToastrService){}
  ngOnInit(): void {
    this.registerForm = this.fb.group ({
      name: [''],
      email:[''],
      address:[''],
      contact:[''],
      password:[''],
      confirmpassword :['']
    })
  }
  registerData:any

  register(rData:FormGroup){
   console.log(rData);
   this.registerData = rData.value;
   this.ecommerce.postuserData(this.registerData).subscribe(data=>{
    localStorage.setItem("issignUp","true")
   console.log(data);
   this.toastr.success("Signup Sucessfully!!");
   this.router.navigate(['/login'])
   },err=>{
   this.toastr.error("Something Went Wrong!!")
   localStorage.setItem("issignUp","false")
   }
  );
 
  }
  goTologin(){
    this.router.navigate(['/login'])
  }

  }
  

