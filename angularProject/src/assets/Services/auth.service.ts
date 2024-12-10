import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private sellerUrl ="http://localhost:3000/seller";
 

  constructor(private http:HttpClient) { }


sellerLogin(id: any) {

}
}

