import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cart, orderNow, priceSummary } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isPaymentModalVisible: boolean = false;
  constructor(private router: Router, private productService: ProductService,private toster:ToastrService) { }
  cartData: undefined | cart[];
totalPrice:undefined|number;
orderData:any;
  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        const itemPrice = parseFloat(
          String(item.price).replace(/[^0-9.-]+/g, '')
        ) || 0;
        const quantity = item.quantity || 1;
        price += itemPrice * quantity;


      });
 this.totalPrice = price+ (price / 20) + 100 - (price / 10);
 console.log(this.totalPrice)
    });




  }
  order(data:{email:string,address:string,contact:string}): void {
let user = localStorage.getItem('user');
let userId = user && JSON.parse(user).id;
if(this.totalPrice){
  let orderData :orderNow ={
    ...data,
    totalPrice: this.totalPrice,
    userId
  }
  this.productService.orderNow(orderData).subscribe((result)=>{
    if(result){
      this.toster.success("Order is Placed Successfully")
  
    }
    
  })
  
}

  
  }








}
