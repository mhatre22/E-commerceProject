import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-selleraddproduct',
  templateUrl: './selleraddproduct.component.html',
  styleUrls: ['./selleraddproduct.component.css']
})
export class SelleraddproductComponent implements OnInit{
  constructor(private router:Router,private ecommerce:EcommerceService,private toastr:ToastrService,
    private fb:FormBuilder
  ){}
  addProductForm :FormGroup|any
  addProductdata:any
  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productName : [''],
      category :[''],
      price:[''],
      description:[''],
      image:['']

    })
   
  }
  addProduct(addproduct:FormGroup){
    console.log(addproduct.value)
    this.addProductdata= addproduct.value;
    this.ecommerce.postProduct(this.addProductdata).subscribe(data=>{
      console.log(data);
      if(this.addProductForm.valid){
        this.toastr.success("Product added Suceessfully")
        this.router.navigateByUrl('sellerproductlist')
      }else{
      this.toastr.error("Try again")

      }
    })
    
  }

  }

   

