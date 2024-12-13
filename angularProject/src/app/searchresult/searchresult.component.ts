import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  searchQuery: string = '';
  searchResults: product[] = [];
  constructor(private productService: ProductService,private route: ActivatedRoute,private router:Router) {}
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.searchQuery = params['search'];
    this.fetchResults();
  });
 
}
fetchResults(): void {
  this.productService.searchProducts().subscribe((products: product[]) => {
    console.log('All products:', products); // Debugging
    console.log('Search query:', this.searchQuery); // Debugging
    this.searchResults = products.filter(product =>
      product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log('Filtered results:', this.searchResults); // Debugging
  });
}

}