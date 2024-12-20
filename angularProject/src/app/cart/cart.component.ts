import { Component, OnInit } from '@angular/core';
import { cart, priceSummary } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartData:undefined|cart[];
priceSummary:priceSummary={
  price:0,
  tax:0,
  discount:0,
  delivery:0,
  total:0
};

  constructor(private productService:ProductService){}
  ngOnInit(): void {
this.productService.currentCart().subscribe((result)=>{
  this.cartData=result;
  let price = 0;
  result.forEach((item) => {
    const itemPrice = parseFloat(
      String(item.price).replace(/[^0-9.-]+/g, '')
    ) || 0;
    const quantity = item.quantity || 1;
    price += itemPrice * quantity;
  

  });
  this.priceSummary.price =price;
  this.priceSummary.discount= price/20;
  this.priceSummary.tax =price/10;
this.priceSummary.delivery =100;
this.priceSummary.total = (price)+(price/20)+100 -(price/10);



  
  console.log(this.priceSummary);

});
}
}