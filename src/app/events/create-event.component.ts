import { EventService } from './shared/events.service';
import { IEvent } from './shared/event.model';
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: []

})

export class CreateEventComponent {
  newEvent!: IEvent;

  isDirty: boolean = true;

  constructor(private router: Router, private eventService:EventService) {

  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues)
    this.isDirty= false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])

  }

}

