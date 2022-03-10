import { IEvent } from './shared/event.model';
import { EventService } from './shared/events.service';
import { Component } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  events!: IEvent[]

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']

    //this.eventService.getEvents().subscribe(events => { this.events = events })

  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }

}
