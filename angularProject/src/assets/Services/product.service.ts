import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../class/datatypes';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl ='http://localhost:3000/product/';
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
  getsearchProduct(query: string): Observable<any[]> {
    const params = query ? new HttpParams().set('q', query): undefined
    return this.http.get<any[]>(this.productUrl,{params});
  }

  }
