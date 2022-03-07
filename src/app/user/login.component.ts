import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [

  ]

})

export class LoginComponent {
  userName: any
  password: any

constructor(private authService: AuthService, private router: Router) {

}

  login(formValues: any) {
   this.authService.loginUser(formValues.userName, formValues.password)
   this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
