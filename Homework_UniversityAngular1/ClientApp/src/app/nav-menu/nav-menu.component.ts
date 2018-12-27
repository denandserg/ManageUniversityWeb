import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

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
    this.curr_user = this.authenticationService.currentUser();
  }
}


