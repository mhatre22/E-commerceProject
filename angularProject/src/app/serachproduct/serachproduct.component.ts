import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-serachproduct',
  templateUrl: './serachproduct.component.html',
  styleUrls: ['./serachproduct.component.css']
})
export class SerachproductComponent implements OnInit {
  constructor(private router:Router,private product:ProductService,
    private toster:ToastrService,
    private activate:ActivatedRoute
  ){}
  query: string = '';
  products: any[] = [];
  filteredProducts:undefined|product[];
  ngOnInit(): void {
      this.product.getsearchProduct('query').subscribe((data) => {
        this.products = data;
  
        const searchQuery = this.activate.snapshot.queryParamMap.get('q');
        if (searchQuery) {
          this.filteredProducts = this.products.filter((product) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      });

  }
}