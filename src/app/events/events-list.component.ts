import { EventService } from './shared/events.service';
import { Component } from '@angular/core';
import { ToastrService } from '../common/toastr.service';


@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  events: any[] | undefined

  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents()

  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }

}
