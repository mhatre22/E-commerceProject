import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-sellerupdate-product',
  templateUrl: './sellerupdate-product.component.html',
  styleUrls: ['./sellerupdate-product.component.css']
})
export class SellerupdateProductComponent  implements OnInit{
  constructor(private router:Router,private fb:FormBuilder,private activated :ActivatedRoute,private prouct:ProductService,
    private toster:ToastrService
  ){}
  updateProductForm :FormGroup|any
  updatePdata:any;
  id:any;
  ngOnInit(): void {
    this.updateProductForm = this.fb.group({
      productName : [''],
      category :[''],
      price:[''],
      description:[''],
      image:['']

    })
    this.id = this.activated.snapshot.paramMap.get('id')
   this.prouct.getProductId(this.id).subscribe((data)=>{
   this.updatePdata = data;
   console.log(data);
    })

}
updateProduct(updateProductForm:FormGroup){
const body ={
  id:updateProductForm.value,
  productName:updateProductForm.value.productName,
  category:updateProductForm.value.category,
  price:updateProductForm.value.price,
  description:updateProductForm.value.description,
  image:updateProductForm.value.image
}
this.prouct.getupdate(body,this.id).subscribe((data)=>{
  console.log(data);
  this.toster.success("Product Updated !")
  this.router.navigate(['sellerproductlist'])
})
}

  }