import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
constructor( private route:Router){

}
gotovege(){
  this.route.navigateByUrl('')
}
}
