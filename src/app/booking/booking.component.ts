import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  
  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      name: [''],
      email: [''],
      number: [''],
      car: [''],
      address: [''],
      pickupdate: [''],
      dropoffdate: ['']
    })
  }
  onSubmit(){
     alert('Thankyou ');
}

