import { ProfileComponent } from './user/profile.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventDetailsComponent,
  EventsThumbnail,
  EventService,
  EventsListComponent,

} from './events/index'

import { ToastrService } from './common/toastr.service';

import { NavBarComponent } from './nav/navBar.component';



import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './event-app.component';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnail,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [EventService, AuthService, ToastrService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtySate
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent]

})
export class AppModule { }


export function checkDirtySate(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved the form  do you really want to cancel ?')
  return true
}
