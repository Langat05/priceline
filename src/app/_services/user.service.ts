
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { User } from '../Models/user';
import { map, catchError } from 'rxjs/operators';


const API_URL = 'https://pricelineapi.herokuapp.com/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  // login(credentials): Observable<any> {
  //   return this.http.post(API_URL+ 'login/', {
  //     // username: credentials.username,
  //     username: credentials.username,
  //     password: credentials.password
  //   }, httpOptions);
  // }

  // register(user): Observable<any> {
  //   return this.http.post(API_URL+ 'register/', {
  //     // username: user.username,
  //     uersname: user.username,
  //     email: user.email,
  //     password: user.password,
  //     confirmPassword: user.confirmPassword
  //   }, httpOptions);
  // }


  login(username, password) {
    return this.http.post<any>(`https://pricelineapi.herokuapp.com/api/login/`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user.id));
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  profile() {
    return this.http.get(`https://pricelineapi.herokuapp.com/api/profile`);
  }

  register(user: User) {
    return this.http.post(`https://pricelineapi.herokuapp.com/api/register/`, user);
  }
  smallcars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/smallcars`);
  }
  midcars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/midcars`);
  }
  largecars(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/largecars`);
  }
  ambulance(){
    return this.http.get(`https://pricelineapi.herokuapp.com/api/ambulance`);
  }

  // vendor(username, bookings,payments,profilepicture: User) {
  //   return this.http.post(`https://pricelineapi.herokuapp.com/api/vendor/`, { username, bookings, payments, profilepicture})
  //   .pipe(map(username, bookings, payments, _profilepicture =>{
  //     localStorage.setItem('currentUser', JSON.stringify(User.id));
  //     return User;

  //   }));
  // }
}

