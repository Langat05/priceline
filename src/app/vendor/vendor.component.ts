import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  post:any; 
  posts=[]; 
  constructor(private http : HttpClient,
    private router: Router,
    ){

   } 
  //  http://127.0.0.1:8000/api/rest-auth/login/
   ngOnInit(): void { 
    this.http.get('https://jsonplaceholder.typicode.com/todos/') 
    .subscribe(Response => {   
      this.post=Response; 
      this.posts=this.post; 
      console.log(this.posts)
    }); 
  }
}