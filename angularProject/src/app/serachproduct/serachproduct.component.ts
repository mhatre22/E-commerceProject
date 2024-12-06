import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-serachproduct',
  templateUrl: './serachproduct.component.html',
  styleUrls: ['./serachproduct.component.css']
})
export class SerachproductComponent implements OnInit {
  constructor(private router:Router,private product:ProductService,private toster:ToastrService,
    private activate:ActivatedRoute
  ){}
  productS: any[] = [];
  searchTerm: string = '';
  ngOnInit(): void {
    this.activate.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.fetchProducts();
  });


}
fetchProducts(){
this.product.fetchProducts('searchproduct').subscribe((searResult)=>{
this.productS = searResult;

},error=>{
   console.error('Error fetching products:', error);
}
)}

}
