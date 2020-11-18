
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://pricelineapi.herokuapp.com/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(API_URL+ 'login/', {
      // username: credentials.username,
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(API_URL+ 'register/', {
      // username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}