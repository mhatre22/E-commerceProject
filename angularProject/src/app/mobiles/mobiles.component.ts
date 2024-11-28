import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent  implements OnInit{
  ngOnInit(): void {
  }
  constructor(private router:Router){

  }
img(){
this.router.navigateByUrl('/mobilehome')
}
}
