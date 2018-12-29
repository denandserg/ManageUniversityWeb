import { Component } from '@angular/core';
<<<<<<< HEAD
import { User } from '../_models';
=======
import { AuthenticationService } from '../_services/authentication.service';
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  authenticationService: AuthenticationService;
  curr_user: string;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  showLogin() {
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    else {
      return false;
    }
  }

  getUser() {
<<<<<<< HEAD
    let obj: User = JSON.parse(sessionStorage.getItem('currentUser'));
    return obj.username;
  }

  getRole() {
    let obj: User = JSON.parse(sessionStorage.getItem('currentUser'));
    return obj.role;
=======
    this.curr_user = this.authenticationService.currentUser();
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
  }
}


