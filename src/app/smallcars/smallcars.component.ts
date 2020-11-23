import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-smallcars',
  templateUrl: './smallcars.component.html',
  styleUrls: ['./smallcars.component.css']
})
export class SmallcarsComponent implements OnInit {
smallcars:any;
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.retrieveSmallCars();
  }
  retrieveSmallCars(){
    this.userService.smallcars()
      .subscribe(
        data => {
          this.smallcars = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
