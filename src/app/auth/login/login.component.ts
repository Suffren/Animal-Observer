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
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
  ) {
    this.setMessage();

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      password: ['', Validators.required]
    });
  }

  setMessage() {
    this.message = (this.authService.isLoggedIn ? 'Connecté' : 'Déconnecté');
  }

  login() {
    this.message = 'En attente de connection';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/home';

        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  onSubmit() { }
}