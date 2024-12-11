import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../class/datatypes';
import { map, Observable, of } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  popularPro(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8');
  }
  postProduct(data:product){
   return this.http.post('http://localhost:3000/product,data',data);
    }
  
  getProduct(){
   return this.http.get<product[]>('http://localhost:3000/product');
    }
    deletProdutcs(id:Number){
     return this.http.delete(`http://localhost:3000/product/${id}`)
  
    }
    getproductId(id:string){
     return this,this.http.get<product>(`http://localhost:3000/product/${id}`)

    }
    updateProduct(body:any,id:any){
      return this.http.put<product>(`http://localhost:3000/product/${id}`,body);

    }
  }
