import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user:any; 
  users=[]; 
  constructor(private http : HttpClient,
    private router: Router,
    ){

   } 
  //  http://127.0.0.1:8000/api/rest-auth/login/
   ngOnInit(): void { 
    this.http.get('https://pricelineapi.herokuapp.com/api/') 
    .subscribe(Response => {   
      this.user=Response; 
      this.users=this.user; 
      console.log(this.users)
    }); 
  }
}