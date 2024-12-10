import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { name} from 'src/assets/class/name';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
  username :string =''
  welcometext :string =''
  constructor( private router:Router,
  private toastr:ToastrService,private ecommerce:EcommerceService,
 ){
  }
  productList:undefined|product[] 
   ngOnInit(): void {
   
    this.ecommerce.getProduct().subscribe(data=>{
    console.log(data);
    this.productList= data; 
  });
 

}

  sellerlogout(){
    localStorage.removeItem("seller")
    localStorage.setItem("islogIn","flase");
    this.toastr.success("Seller have logged out successfully.");
    this.router.navigate(['/sellerlogin'])

  }
  productList1(){
    this.router.navigateByUrl('sellerproductlist');

  }
  addProduct(){
    this.router.navigateByUrl('selleraddproduct');

  }
}
