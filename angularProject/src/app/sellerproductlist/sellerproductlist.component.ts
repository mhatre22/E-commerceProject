import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/assets/class/datatypes';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';

@Component({
  selector: 'app-sellerproductlist',
  templateUrl: './sellerproductlist.component.html',
  styleUrls: ['./sellerproductlist.component.css']
})
export class SellerproductlistComponent implements OnInit {
  constructor(private ecommerce:EcommerceService,private toster:ToastrService,private router:Router){}
  productList:undefined|product[]
  ngOnInit(): void {
  this.pList();
  }
deleteProduct(id:number){
  console.log("Product is :",id)
  this.ecommerce.deletePro(id).subscribe((result)=>{
if(result){
  this.toster.success("Product Deleted!");
  this.pList();
}

  });
}
pList(){
  this.ecommerce.getProduct().subscribe(data=>{
    console.log(data);
    this.productList= data;
  })
}
updateProduct(id:any){
this.router.navigateByUrl('/sellerupdateproduct/'+id)

}
}
