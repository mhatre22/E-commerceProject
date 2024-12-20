import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product} from '../class/datatypes';
import { map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData =new EventEmitter<product[] |[]>();
  userId: any;
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
      this.cartData.emit([data]);
     }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
     }
     this.cartData.emit(cartData);
    }
   removedItemsCarts(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items :product[]=JSON.parse(cartData);
      items = items.filter((item:product)=>productId!==item.id);
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);
   } 
}
addToCart(cartData: cart):Observable<any> {
 return this.http.post('http://localhost:3000/cart', cartData);
}

transferCartDataToDB() {
  let cartData = localStorage.getItem('localCart');
  if (cartData) {
    let items = JSON.parse(cartData);
    
    items.forEach((item: cart) => {
      this.addToCart(item).subscribe(
        (response) => {
          console.log('Cart item added to DB:', response);
        },
        (error) => {
          console.error('Error adding cart item to DB:', error);
        }
      );
    });
    localStorage.removeItem('localCart');
    console.log('All cart data removed from localStorage');
  } else {
    console.log('No cart data found in localStorage');
  }
}
getCartByUserId(userId: number){
this.http.get<cart[]>(`${'http://localhost:3000/cart'}?userId=${userId}`,
    {observe:'response',}).subscribe((result)=>{
      console.log(result);
      if(result && result.body){
      this.cartData.emit(result.body)
      }
    });
}
currentCart(){
  let storeuserName = localStorage.getItem('user');
  let userData = storeuserName && JSON.parse(storeuserName)[0];
  return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userData.id)

}
    
}