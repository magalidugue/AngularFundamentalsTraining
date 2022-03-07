import { IEvent } from './shared/event.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styles: [
    `
    .pad-left {
      margin-left: 10px;
    }
    `
  ]
})
export class EventsThumbnail {
  @Input() event: IEvent | undefined
}
