import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private sellerName = [
    { username: " " }
  ];
  url='http://localhost:3000/sellerData';
  constructor(private http:HttpClient) { 
  }
  postuserData(body:any){
    return this.http.post('http://localhost:3000/userData',body);
  }
   getlogindata(){
  return this.http.get<any>('http://localhost:3000/userData');
}
postsellerData(body:any){
  return this.http.post('http://localhost:3000/sellerData',body);
}
getsellerData(){
  return this.http.get<any>('http://localhost:3000/sellerData');
}
postProduct(body:any){
  return this.http.post('http://localhost:3000/product',body);
}
getProduct(){
  return this.http.get<any>('http://localhost:3000/product')
}
authenticate(username: string): boolean {
  return this.sellerName.some(
    user => user.username === username

  );
}
getStoredUsername(username:string): string | null {
  return localStorage.getItem(this.url);
}
}