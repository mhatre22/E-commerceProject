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
  products: any[] = [];
  filteredProducts: any[] = [];
  isDropdownVisible = false;



  
  constructor(private router: Router,private product:ProductService,
 
    private fb:FormBuilder,private cdr: ChangeDetectorRef ) { 
 
    }
  ngOnInit(): void {
this.router.events.subscribe((val:any)=>{
if (val.url){
  console.log(val.url)
  if(localStorage.getItem('seller') && val.url.includes('seller')){

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
  hideDropdown(): void {
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);

}

}



