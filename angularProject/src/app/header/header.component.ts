import { query } from '@angular/animations';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  menuType :string='default';
sellerName :string="";
userName:string=" ";
searchQuery: string = '';
product: product[] |undefined;
filteredProducts: product[] = [];
showSuggestions: boolean = false;
addItems = 0;
  constructor(private router: Router,private productService:ProductService ) { 
 
    }
 
  ngOnInit(): void {
this.router.events.subscribe((val:any)=>{
if (val.url){
  if(localStorage.getItem('seller') && val.url.includes('seller')){
    console.log(" inside seller")

    if(localStorage.getItem('seller')){
      let storeName = localStorage.getItem('seller');
      let sellerData =storeName && JSON.parse(storeName)[0];
      this.sellerName = sellerData.username;
      console.log(this.sellerName);
        this.menuType = 'seller';
    }
  }else if (localStorage.getItem('user')){
    console.log(" inside user")
    let storeuserName = localStorage.getItem('user');
    let userData = storeuserName && JSON.parse(storeuserName)[0];
    this.userName =userData.username;
    console.log(this.userName);
    this.menuType ='user';
    this.productService.getCartByUserId(userData.id);
  }
  else{
    console.log("outside seller")
     this.menuType='default'
  }
  this.productService.searchProducts().subscribe((products: product[]) => {
    this.product = products;
    this.filteredProducts = products;
    products.length = 4;
    console.log('Loaded products:', this.product);
  });
  let cartData = localStorage.getItem('localCart');
  if(cartData){
    this.addItems = JSON.parse(cartData).length
  }
this.productService.cartData.subscribe((items)=>{
  this.addItems  = items.length;
})

}
})

  
}

  goToHome(){
    this.router.navigateByUrl('/');
  }
  sellerLogout(){
    localStorage.removeItem('seller');
    this.router.navigateByUrl('/');
  }
  userLogout(){
  localStorage.removeItem('user');
  this.productService.cartData.emit([]);
  this.router.navigateByUrl('/')
  }


  addProduct(){
    this.router.navigateByUrl('/selleraddproduct');
  }
  productList(){
    this.router.navigateByUrl('/sellerhome');
  }
  filterProducts(query: string): void {
    console.log('Search query:', query);
    if (query) {
      this.filteredProducts = (this.product || []).filter(product =>
        product.productName.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredProducts = this.product || [];
    }
    console.log('Filtered products:', this.filteredProducts);
  }
  selectProduct(productName:string):void{
this.searchQuery = productName;
this.showSuggestions = false;
this.filterProducts(this.searchQuery);
  }

  gotoSearch() {
    if (this.searchQuery) {
      this.router.navigate(['/searchresult'], {
        queryParams: { search: this.searchQuery },
      });
    }
  }
  onFocus(): void {
    this.showSuggestions = true;
  }
  onBlur(): void {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
}
  
gotoproDetails(id:any){
  this.router.navigate(['/productdetails/'+id]);
}
goToUser(){
  this.router.navigateByUrl('/user-login');
}
goToseller(){
  this.router.navigateByUrl('/seller-login');
}

}


