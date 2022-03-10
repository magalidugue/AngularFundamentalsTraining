import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styles: [


  ]
})
export class ProfileComponent {


    firstName = new FormControl()
    lastname = new FormControl()
      profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastname
    })
  }


