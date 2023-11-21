import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = '';
      if (this.authService.isLoggedIn) {
        this.router.navigate(['']);
      }
    });
  }
}
