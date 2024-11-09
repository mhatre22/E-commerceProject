import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
  constructor( private router:Router,private toastr:ToastrService){}
  ngOnInit(): void {
   
  }
  sellerlogout(){
    localStorage.removeItem("seller")
    localStorage.setItem("islogIn","flase");
    this.toastr.success("Seller have logged out successfully.");
    this.router.navigate(['/sellerlogin'])

  }
}
