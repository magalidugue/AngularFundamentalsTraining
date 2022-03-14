import { IEvent, Isession } from './../shared/event.model';
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
  event!: IEvent;
  addMode!: boolean
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.event = <IEvent>this.eventService.getEvent(+this.route.snapshot.params['id'])


  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: Isession) {
    const nextId = Math.max.apply(null, this.event.session.map(s => s.id));
    session.id = nextId +1
    this.event.session.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

}
