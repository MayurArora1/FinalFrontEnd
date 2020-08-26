import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:9090/";

  loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(this.baseUrl+"register", user);
  }

  loginUser(credential: any){
    return this.http.post(this.baseUrl+"login", credential);
  }

  getUserName(userId: number){
    return this.http.get(this.baseUrl+userId);
  }
 
  
}