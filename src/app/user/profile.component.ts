import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {


  profileForm!: FormGroup;

  constructor(private authService:AuthService, private router:Router) {

  }


  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser?.firstName, Validators.required)
    let lastname = new FormControl(this.authService.currentUser?.lastName, Validators.required)
       this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastname
    })

  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues: { firstName: string; lastName: string; }) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }
  }
