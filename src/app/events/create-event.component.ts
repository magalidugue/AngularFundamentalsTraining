import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: []

})

export class CreateEventComponent {

  constructor(private router: Router) {

  }

  cancel() {
    this.router.navigate(['/events'])

  }

}

