import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';


@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
  
  constructor( private router:Router,
  private toastr:ToastrService,
  private productService:ProductService
 ){
  }
  product:any;
  productList:undefined|product[] 
   ngOnInit(): void {
this.proList();
  
  };
  deleteProduct(id:number){
 this.productService.deletProdutcs(id).subscribe((result)=>{
  if(result){
    this.toastr.success("Product Deleted")
    this.proList();
  }

 });

  }
proList(){
  this.productService.getProduct().subscribe((result)=>{
    if(result){
     this.productList = result;
    }
 
    });
}
}




