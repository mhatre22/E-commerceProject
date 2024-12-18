import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cart, product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productQuantity:number =1;
quantity:Number=1;
  id:any;
  productData: undefined|product;
  removedCart =false;
  

constructor(private toster:ToastrService,private productService:ProductService,
  private actiRoute: ActivatedRoute){

}
  ngOnInit(): void {
    this.id = this.actiRoute.snapshot.paramMap.get('id');
    this.productService.getproductId(this.id).subscribe((result)=>{
      console.log(result);
      this.productData = result;
    });
    
    let cartData = localStorage.getItem('localCart');
    if(this.id && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((item:product)=>this.id ==item.id.toString());
      if(items.length){
        this.removedCart =true;
      }else{
        this.removedCart =false;
      }
    }
  }
handleQuantity(val:string){
  if(this.productQuantity < 20 && val ==='plus'){
   this.productQuantity+=1
  }else if(this.productQuantity> 0 && val === 'min'){
    this.productQuantity-=1
  }
}
addToCart() {
if(this.productData){
  this.productData.quantity = this.productQuantity ;
}
  if(!localStorage.getItem('user')){
    console.log(this.productData);
  this.productService.localAddToCart(this.productData!)
  this.removedCart = true;
  }else{
    console.log("User is login");
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id
    console.log("User Login Id=",userId);
    let cartData = {
      ...this.productData,
      userId,
      productId: this.productData!.id, 
    };
    delete cartData.id;
    console.log(cartData);
    this.productService.addtoCart(cartData).subscribe((result)=>{
      console.log("result",result);
      if(result){
        this.toster.success("Product Added in Cart");
      }
    })
  
  }

}
removeCart(id:number){
  this.productService.removedItemsCarts(id);
  this.removedCart =false;

}
}



  

