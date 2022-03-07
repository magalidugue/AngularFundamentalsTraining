import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/events.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px }
  .event-image {height: 100px;}
  `]


})

export class EventDetailsComponent {
  event: IEvent | undefined
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {


    this.event = this.eventService.getEvent(+ this.route.snapshot.params['id'])


  }

}
