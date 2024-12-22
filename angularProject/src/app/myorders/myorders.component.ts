import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderNow } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  constructor(private router:Router,private productService:ProductService){}
  orderData:orderNow[]|undefined
  ngOnInit(): void {
this.getCartData();
  }
  cancelorder(orderId:number){
this.productService.deleteOrder(orderId).subscribe((result)=>{
  console.log(result)
  this.getCartData();
})
  }


  getCartData(){
    this.productService.orderList().subscribe((result)=>{
      this.orderData = result;
      console.log(this.orderData)
  
     })

}
}