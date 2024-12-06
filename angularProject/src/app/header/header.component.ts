import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime,  filter, of, switchMap } from 'rxjs';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl('');
  allProducts :undefined |product[];
  productSeach:undefined|product[];
  searching:undefined|product [];

  
  constructor(private router: Router,private product:ProductService) { }
  ngOnInit(): void {
    this.product.searProduct('productSeach').subscribe((data) => {
      this.allProducts = data;
      this.productSeach = data; 
     data.length=7;
    });
    this.product.searProduct('productSeach').subscribe((data) => {
      this.allProducts = data;
      this.productSeach = data;
      data.length=7;
    });
  
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((searchTerm: string | null) => {
        if (!searchTerm) {
          return of(this.allProducts);
        }
      
        const filteredProducts = this.allProducts?.filter(product =>
          product?.productName?.toLowerCase().includes(searchTerm?.toLowerCase() ?? ''),
           
        );
        return of(filteredProducts); 
      })
    ).subscribe(filteredProducts => {
      this.productSeach = filteredProducts;
    });
    
    
  }
  goToLogin(){
    this.router.navigateByUrl('/login')
  }
  goTosellerLogin(){
    this.router.navigateByUrl('/sellerlogin')
  }
  hideInput(){
    this.productSeach = undefined;
  }
  submitSearch(val:string){
const searching = this.searchControl.value
if(searching){
  this.router.navigate(['/search'], { queryParams: { q: searching } });
}
  }
  onKeyUp(event: any): void {
    const inputValue = event.target.value;
    console.log('Keyup event triggered:', inputValue);
  }
}







