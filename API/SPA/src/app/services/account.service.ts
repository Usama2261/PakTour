import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "https://localhost:44383/api/";

  

  constructor(private http: HttpClient) { }


  createUser(model: any){
    debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<User>(this.url + "Account/CreateUser", model, httpOptions);
  }

  getAllUsers(): Observable<User>{
    return this.http.get<User>(this.url + "Account");
  }

}
