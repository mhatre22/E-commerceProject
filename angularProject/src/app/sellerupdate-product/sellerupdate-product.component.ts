import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-sellerupdate-product',
  templateUrl: './sellerupdate-product.component.html',
  styleUrls: ['./sellerupdate-product.component.css']
})
export class SellerupdateProductComponent implements OnInit{
  productData:undefined|product;
  product :any;
constructor(private router:Router,private productService:ProductService,
  private actiRoute:ActivatedRoute,private toster:ToastrService){

}
  ngOnInit(): void {
 this.id = this.actiRoute.snapshot.paramMap.get('id');
this.productService.getproductId(this.id).subscribe((result)=>{
  console.log(result);
  this.productData = result;
 })


  }
  id:any;
  updated:any;
  updatePro(updateForm:NgForm){
   const body ={
    id:updateForm.value.id,
    productName:updateForm.value.productName,
    category  :updateForm.value.category,
    color     :updateForm.value.color,
    price     :updateForm.value.price,
    description :updateForm.value.description,
    image     :updateForm.value.image
   }
   this.productService.updateProduct(body,this.id).subscribe((data)=>{
    console.log(data)
    this.toster.success("Data Updated Success !!")
    this.router.navigateByUrl('/sellerhome')
   })

    }

  }

