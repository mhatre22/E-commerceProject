import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../class/datatypes';

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
}
