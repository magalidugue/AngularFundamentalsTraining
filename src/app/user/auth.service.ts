import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
  export class AuthService {
    currentUser!: IUser;
  router: any;
    loginUser(userName: any, password: any) {
      this.currentUser= {
        id: 1,
        userName: userName,
        firstName: 'Magali',
        lastName: 'Dugué'
      }
    }

    isAuhtenticated() {
      return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {

      this.currentUser.firstName = firstName
      this.currentUser.lastName = lastName


    }
  }
