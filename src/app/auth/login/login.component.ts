import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  pending: boolean = false;
  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.pending = true;
    this.message = 'En attente de connection...';

    this.authService.login(this.loginForm.value).subscribe(
      () => {
        if (this.authService.isLoggedIn) {
          const redirectUrl = this.authService.redirectUrl || 'report';

          this.router.navigate([redirectUrl]);
        }
        this.pending = false;
      },
      (error) => {
        this.pending = false;
        this.message = error;
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}