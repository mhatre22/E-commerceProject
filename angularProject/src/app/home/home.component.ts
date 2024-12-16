import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/assets/class/datatypes';
import { ProductService } from 'src/assets/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
popularProduct :undefined | product[]
id:any;
  constructor(private router: Router,private product:ProductService) { }
  ngOnInit(): void {
  this.product.popularPro().subscribe((data)=>{
    console.log(data);
    this.popularProduct = data;
  })
  }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }
  gotoproDetails(id:any){
    this.router.navigate(['/productdetails/'+id])
  }
  addToCart(id:any){
    this.router.navigate(['/productdetails/'+id]) 
  }
  
}
