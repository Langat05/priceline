import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  ambulance:any;
  constructor(private userService: UserService) { }
  
  ngOnInit(){
    this.retrieveAmbulance();
  }
  retrieveAmbulance(){
    this.userService.ambulance()
      .subscribe(
        data => {
          this.ambulance = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
