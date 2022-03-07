import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'navBar',
  templateUrl: './navBar.component.html',
  styles: [
    ` li > a.active {color: #F97924;}`

  ]
})
export class NavBarComponent {
  constructor(public auth: AuthService) {

  }

}
