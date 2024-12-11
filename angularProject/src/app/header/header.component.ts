import { query } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sellerName :string=""
  constructor(private router: Router ) { 
    }
    menuType :string='default';
  ngOnInit(): void {
this.router.events.subscribe((val:any)=>{
if (val.url){
  if(localStorage.getItem('seller') && val.url.includes('seller')){
    console.log(" inside seller")
    this.menuType = "seller"
    if(localStorage.getItem('seller')){
      let storeName = localStorage.getItem('seller');
      let sellerData =storeName && JSON.parse(storeName)[0];
      this.sellerName = sellerData.username;
      console.log(this.sellerName);
    }
  }else{
    console.log(" outside seller")
     this.menuType='default'
  }
}
})

  
}
  goToLogin(){
    this.router.navigateByUrl('/login')
  }
  goToseller(){
    this.router.navigateByUrl('/seller-auth')
  }
  goToHome(){
    this.router.navigateByUrl('')
  }
  sellerLogout(){
    localStorage.removeItem('seller')
    this.router.navigateByUrl('')
  }
  addProduct(){
    this.router.navigateByUrl('selleraddproduct');
  }
  productList(){
    this.router.navigateByUrl('sellerhome');
  }
}



