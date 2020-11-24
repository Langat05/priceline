import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder} from '@angular/forms'
import{BookingService} from'../booking.service'
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  form:any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  
  constructor(private bookingservice : BookingService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      email: [''],
      cell_no: [''],
      
      address: [''],
      startdate: [''],
      returndate:[''],
    
    })
  }
  onSubmit(){
    this.bookingservice.booking(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    alert("Thankyou for your request we will get back to you after reviewing your application!");
  }

}
