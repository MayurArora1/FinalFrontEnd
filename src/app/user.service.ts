import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { AdminLogin } from "./adminlogin/AdminLogin";
import { Observable } from "rxjs";
import { AdminLoginStatus } from "./adminlogin/AdminLoginStatus";

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
  checkEmail(user:User){
    var url="http://localhost:9090/hello";
    return this.http.post(url,user);

  }

  loginAdmin(adminlogin: AdminLogin):Observable<AdminLoginStatus>{
    var url="http://localhost:9090/adminlogin";
    return this.http.post<AdminLoginStatus>(url,adminlogin);
  }
}