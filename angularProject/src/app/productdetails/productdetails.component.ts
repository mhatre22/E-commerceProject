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
  cartDatalist: any;
  cartData:any;
  userId:any |number;
  cartItems: any|product;
  productId:any

constructor(private toster:ToastrService,private productService:ProductService,
  private actiRoute: ActivatedRoute){

}
  ngOnInit(): void {
    this.id = this.actiRoute.snapshot.paramMap.get('id');
    this.productService.getproductId(this.id).subscribe((result)=>{
      console.log(result);
      this.productData = result;
    });

    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userId = Array.isArray(parsedUser) ? parsedUser[0]?.id : parsedUser.id;
      console.log('Extracted User ID:', this.userId);
      this.productService.getCartByUserId(this.userId);
      this.productService.cartData.subscribe((result)=>{
     let item =  result.filter((item:product)=>this.productId ===item.productId?.toString);
     if(item.length) {
      this.removedCart = true;
     }
      })

     
    }
    
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
    if (!this.productData) {
      console.error('Product data is missing.');
      return;
    }
    const user = localStorage.getItem('user');
    if (!user) {
      console.error('User is not logged in.');
      return;
    }
  
    const parsedUser = JSON.parse(user);
    console.log('Parsed User:', parsedUser);

    const userId = Array.isArray(parsedUser) ? parsedUser[0]?.id : parsedUser.id;
    console.log('User ID:', userId);
  
    if (!userId) {
      console.error('User ID is missing.');
      return;
    }
     let cartData = {
      ...this.productData,
      userId,
      productId: this.productData.id!,
      
    };
    cartData.id;
    console.log('Cart Data:', cartData); 
    this.productService.addToCart(cartData).subscribe(
      (response) => {
        console.log('Cart added successfully:', response);
        this.productService.getCartByUserId(userId);
        this.removedCart = true;
        this.productService.transferCartDataToDB();
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
 
  }
setTimeout(()=>{
  this.productService.getCartByUserId(this.userId);
},2000)

}
removeCart(productId:number){
  this.productService.removedItemsCarts(productId);
  this.removedCart = true;

}

}



  

