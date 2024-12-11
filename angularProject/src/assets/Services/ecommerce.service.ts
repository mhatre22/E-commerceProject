import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { product, sellerLogin, sellersignup } from '../class/datatypes';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http:HttpClient) { 
  }
  postuserData(body:any){
    return this.http.post('http://localhost:3000/userData',body);
  }
   getlogindata(){
  return this.http.get<any>('http://localhost:3000/userData');
}
postsellerData(body:sellersignup){
  return this.http.post('http://localhost:3000/seller',body);

}
getsellerData(){


}

postProduct(body:any){
  return this.http.post('http://localhost:3000/product',body);
}
getProduct(){
  return this.http.get<product[]>('http://localhost:3000/product')
}



deletePro(id:Number){
  return this.http.delete(`http://localhost:3000/product/${id}`)
}

}