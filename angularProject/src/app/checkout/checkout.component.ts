import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cart, orderNow } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isPaymentModalVisible: boolean = false;
  constructor(private router: Router, private productService: ProductService, private toster: ToastrService) { }
  cartData: undefined | cart[];
  totalPrice: undefined | number;
  orderData: any;
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
      this.totalPrice = price + (price / 20) + 100 - (price / 10);
      console.log(this.totalPrice)
    });




  }
  order(data: { email: string; address: string; contact: string }): void {

    let user = localStorage.getItem('user');
    console.log("Raw user from localStorage:", user);

    const users = JSON.parse(user || '{}');
    const userId = Array.isArray(users) ? users[0]?.id : users.id;
    console.log('Parsed userId:', userId);



    if (!userId) {
      console.error("User ID not found in localStorage. Ensure the user is logged in.");
      return; // Exit if userId is missing
    }

    if (this.totalPrice) {
      let orderData: orderNow = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined,
      };
      if (this.cartData) {
        this.cartData.forEach((item, index) => {
          setTimeout(() => {
            this.productService.deleteCartItem(item.id);
          }, index * 600);
        });
      }
      

      this.productService.orderNow(orderData).subscribe((result) => {
        console.log("Order response:", result);
        if (result) {
          this.toster.success("Order is Placed Successfully");
          setTimeout(() => {
            this.router.navigateByUrl('/myorder-page');
          }, 4000)
        }
      });
    } else {
      console.error("Total price is missing.");
    }
  }

}












