import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/assets/Services/product.service';


@Component({
  selector: 'app-selleraddproduct',
  templateUrl: './selleraddproduct.component.html',
  styleUrls: ['./selleraddproduct.component.css']
})
export class SelleraddproductComponent implements OnInit{
  constructor(private router:Router,private toastr:ToastrService,
    private productService:ProductService
    
  ){}
 
  addProductdata:any
  ngOnInit(): void {
this.productService.getProduct();
  }
  addProduct(addproduct:NgForm){
    console.log(addproduct.value)
    this.addProductdata= addproduct.value;
    this.productService.postProduct(this.addProductdata).subscribe((data)=>{
      console.log(data);
      this,this.addProductdata = data;
    })
  this.toastr.success("Product Add")
  this.router.navigateByUrl('/sellerhome')
    
  }

  }

   

