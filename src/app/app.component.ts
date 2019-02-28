import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'epl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'E-Learning Portal';
  isCollapsed = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  constructor(private authService: AuthService, private router: Router) { }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}

