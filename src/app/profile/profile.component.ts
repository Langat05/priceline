import { Component, OnInit, Input } from '@angular/core';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /*** An array of all the Profile objects from the API
  */
  public profile: any;

  /**
   * An object representing the data in the "add" form
   */
  public update_profile: any;

  constructor(private _userService: UserService) { }

  ngOnInit(){
    this.retrieveprofile();
  }
  retrieveprofile(){
    this._userService.profile()
      .subscribe(
        data => {
          this.profile = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
