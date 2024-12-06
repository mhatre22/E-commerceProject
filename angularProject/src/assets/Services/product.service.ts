import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../class/datatypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProductId(id: any){
    return this.http.get(`http://localhost:3000/product/${id}`);
  }
  getupdate(body:any,id:any){
    return this.http.put<product>('http://localhost:3000/product/'+id,body);
  }
  popularPro(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8');
  }
  searProduct(query:string):Observable<product[]>{
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`);
  }
  fetchProducts(searchproduct:string){
   return this.http.get<product[]>(`http://localhost:3000/product?=${searchproduct}`)
  }
}
