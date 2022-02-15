import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ROOT_URL = "http://localhost:4000/api/user";
  constructor(private http:HttpClient,private router:Router) { }

  login(user: any){
    return this.http.post<any>(`${this.ROOT_URL}/login`,user);
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/user/login"]);
  }
  AlogOut(ln:number){
    console.log("inside all log ")
    setTimeout(()=>{
      this.logOut();
    },ln);
    setTimeout(()=>{
      alert("Session TimeOut...")
    },ln)
  }
}
