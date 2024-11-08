import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
postsellerdata(body:any){
  return this.http.post('http://localhost:3000/sellerData',body);
}
getsellerData(){
  return this.http.get<any>('http://localhost:3000/sellerData');
}
}
