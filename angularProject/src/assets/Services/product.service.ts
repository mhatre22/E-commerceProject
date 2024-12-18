import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product} from '../class/datatypes';
import { map, Observable, of } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData =new EventEmitter<product[] |[]>();
  constructor(private http:HttpClient) { }


  popularPro(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8');
  }
  postProduct(data:product){
   return this.http.post('http://localhost:3000/product',data);
    }
  
  getProduct(){
   return this.http.get<product[]>('http://localhost:3000/product');
    }
    deletProdutcs(id:Number){
     return this.http.delete(`http://localhost:3000/product/${id}`);
  
    }
    getproductId(id:any){
     return this.http.get<product>(`http://localhost:3000/product/${id}`);

    }
    updateProduct(body:any,id:any){
      return this.http.put<product>(`http://localhost:3000/product/${id}`,body);

    }
    searchProducts(): Observable<product[]> {
      return this.http.get<product[]>('http://localhost:3000/product');
    }
    localAddToCart(data:product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
     if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
     }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
     }
     this.cartData.emit(cartData);
    }
   removedItemsCarts(id:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items :product[]=JSON.parse(cartData);
      items = items.filter((item:product)=>id!==item.id);
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);
   } 
}




}