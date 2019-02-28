import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {
  errorMessage: string;
  pageTitle = 'User';

  constructor(private authService: AuthService, private router: Router) { }
}
