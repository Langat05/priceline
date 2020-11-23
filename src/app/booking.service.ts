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

export class BookingService {

  constructor(private http: HttpClient) { }

  

  booking(car): Observable<any> {
    return this.http.post(API_URL+'id/'+ 'bookcar/', {
     
      email: car.email,
      address:car.address,
      telephone:car.telephone,
      date:car.date,
      name:car.name,
     
      
    }, httpOptions);
  }
}