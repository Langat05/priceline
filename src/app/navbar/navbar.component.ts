import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginstatus = new BehaviorSubject<boolean>(null);
  username : Observable<string>;

  constructor(private acct : AccountService, private router:Router) { }

  ngOnInit(): void {
      
  }

}
