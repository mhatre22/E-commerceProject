import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { EcommerceService } from 'src/assets/Services/ecommerce.service';
import { ToastrService } from 'ngx-toastr';  // Correct import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private ecommerce:EcommerceService,
    private fb:FormBuilder, private toastr: ToastrService){
      localStorage.setItem("isLogIn","false");
    }
  ngOnInit(): void {
  this.loginForm =this.fb.group({
    email:[''],
    password:['']

  });
  }
  loginForm :FormGroup|any;

  loginData:any;
  login(lData:FormGroup){
    console.log(lData);
    this.loginData = lData.value
    this.ecommerce.getlogindata()
    .subscribe(res=>{
    const user = res.find((a :any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });

    if (user){
    this.toastr.success("UserLogin Suceesfully!!");
    localStorage.setItem("user",JSON.stringify({user}));
    localStorage.setItem("isLogIn","true")
    this.router.navigate(['/userhome']);
    }else{
     this.toastr.error("User Not Found!!");
     localStorage.setItem("isLogIn","false");
    }
    });
    

  }
  gotoRegistraion(){
this.router.navigateByUrl('register')
  }
  }

