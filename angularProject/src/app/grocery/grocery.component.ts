import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
constructor( private router:Router){

}
goTovegetable(){
  this.router.navigate(['/grocery/vegetables'])
}
goTodairyproduct(){
  this.router.navigate(['/grocery/dairyproducts'])
}
goTostaples(){
  this.router.navigate(['/grocery/staples'])
}
}
