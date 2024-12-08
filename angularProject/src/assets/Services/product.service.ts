import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../class/datatypes';
import { map, Observable, of } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private productUrl:string ='http://localhost:3000/product/';
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
  getsearchProduct(): Observable<product[]> {
    return this.http.get<product[]>(this.productUrl);
  }

  }
