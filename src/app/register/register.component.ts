import { Component, OnInit, Output } from '@angular/core';
import { userInfo, UserInfo } from 'os';
import { EventEmitter } from 'protractor';
import {User} from './../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User(0,"","","");
  

  createUser(){
    this.newUser = new User(0,'','','')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
