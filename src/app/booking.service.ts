import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{BookingComponent} from'../app/booking/booking.component';

const API_URL = 'https://pricelineapi.herokuapp.com/api/id/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  constructor(private http: HttpClient) { }

  

  booking(car): Observable<any> {
    return this.http.post(API_URL+ 'bookcar/', {
     
      email: car.email,
      address:car.address,
      cell_no:car.cell_no,
      startdate:car.startdate,
      returndate:car.returndate,
      
     
      
    }, httpOptions);
  }
}