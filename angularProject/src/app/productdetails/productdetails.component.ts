import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
productQuantity:number =1;
quantity:Number=1;
  id:any;
  productData: product | undefined;
  localAddToCart: any;
constructor(private router:Router,private productService:ProductService,private actiRoute: ActivatedRoute){
  this.id = this.actiRoute.snapshot.paramMap.get('id');
  this.productService.getproductId(this.id).subscribe((result)=>{
    console.log(result);
    this.productData = result;
  })
}
handleQuantity(val:string){
  if(this.productQuantity < 20 && val ==='plus'){
   this.productQuantity+=1
  }else if(this.productQuantity>0 && val === 'min'){
    this.productQuantity-=1
  }
}
addToCart() {
if(this.productData){
  this.productData.quantity = this.productQuantity;
  if(!localStorage.getItem('user')){
    console.log(this.productData);
    this.productService.localAddToCart(this.productData);
  }
  }

}

}



  

