import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSignup } from '../class/datatypes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
  getUser(id:any){
    return this.http.get('http://localhost:3000/user',id)
  }
  postUser(data:any){
    return this.http.post('http://localhost:3000/user',data)

  }
}
