import { EventService } from './shared/events.service';
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from 'rxjs';

@Injectable()
export class EventsListResolver implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve() {
    return this.eventService.getEvents()
      .pipe(
        map(events => events)
      )

  }
}
