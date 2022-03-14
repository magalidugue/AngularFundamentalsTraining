import { Isession } from './../shared/event.model';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: []

})

export class SessionListComponent  {
  @Input() session!: Isession[]


}
