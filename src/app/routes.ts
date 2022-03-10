import { UserModule } from './user/user.modules';
import { Error404Component } from './errors/404.component';

import { Routes } from "@angular/router";
import {
  EventsListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventRouteActivator, CreateSessionComponent


} from './events/index'

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user', loadChildren: () => import('./user/user.modules')
      .then(m => m.UserModule)
  }



]
