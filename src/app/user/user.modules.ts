import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from './user.routes';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes)

  ],
  declarations: [
    ProfileComponent,
    LoginComponent

  ],
  providers: [


  ]

})

export class UserModule {

}
