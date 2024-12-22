import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary, product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: undefined | cart[];
removedCart = false;
  priceSummary: priceSummary = {
    price: 0,
    tax: 0,
    discount: 0,
    delivery: 0,
    total: 0
  };

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.loadDetails();
  }


  loadDetails(){
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
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 20;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = (price) + (price / 20) + 100 - (price / 10);
      console.log(this.priceSummary);
      if(!this.cartData.length){
        this.router.navigateByUrl('/');
      }

    });
  }
  gotCheckouts() {
    this.router.navigateByUrl('checkout-page')
  }
  removeCart(cartId: number | undefined): void {
    if (cartId && this.cartData) {
      this.productService.removedCarts(cartId).subscribe(
        (result) => {
          console.log(`Cart item with ID ${cartId} removed successfully.`);
  
          this.cartData = this.cartData?.filter((item) => item.id !== cartId);
  
       
          this.loadDetails();
        },
        (error) => {
          console.error(`Failed to remove cart item with ID ${cartId}. Error:`, error);
        }
      );
    } else {
      console.error('Cart ID is undefined or cart data is empty.');
    }
  }
  
}