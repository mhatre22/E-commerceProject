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
  searchForm: FormGroup;
  products: any[] = [];
  filteredProducts: any[] = [];
  isDropdownVisible = false;



  
  constructor(private router: Router,private product:ProductService,
 
    private fb:FormBuilder,private cdr: ChangeDetectorRef ) { 
    this.searchForm = this.fb.group({
      query:['']
    });
  }

  ngOnInit(): void {
  this.product.getsearchProduct('query').subscribe(data=>{
    this.products = data;
  console.log('Products:', this.products);
  });
  this.searchForm.get('query')?.valueChanges.subscribe((value: string) => {
    console.log("Input value:", value); 
    const query = value?.toLowerCase() || ''; 
    this.filteredProducts = this.products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    this.isDropdownVisible = this.filteredProducts.length > 0;
    console.log('Filtered Products:', this.filteredProducts); 
  });
}

selectProduct(productName: string): void {
  this.searchForm.get('query')?.setValue(productName);
  this.filteredProducts = []; 
  this.isDropdownVisible = false;
}

  

  search(): void {
    const query = this.searchForm.get('query')?.value;
    this.router.navigate(['/searchResult'], { queryParams: { q : query } });
    this.selectProduct(query)

  }
  goToLogin(){
    this.router.navigateByUrl('/login')
  }
  goTosellerLogin(){
    this.router.navigateByUrl('/sellerlogin')
  }

  hideDropdown(): void {
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);

}

}



