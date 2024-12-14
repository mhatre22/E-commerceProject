import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularProject';
  product: any;
  popularProduct: any;
  constructor(private router:Router,private sellerService:SellerService){

  }


  ngOnInit(): void {
 
}

}
