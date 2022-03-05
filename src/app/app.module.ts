import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/events.service';
import { NavBarComponent } from './nav/navBar.component';
import { EventsThumbnail } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './event-app.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnail,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
