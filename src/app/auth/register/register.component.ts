import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  message: string;
  pending: boolean = false;
  registerForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(/[a-zA-Z\-]{3,}/)]],
      lastname: ['', [Validators.required, Validators.pattern(/[a-zA-Z\-]{3,}/)]],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      password: ['', Validators.required]
    });
  }

  register() {
    this.pending = true;
    this.message = "En attente d'inscription...";

    this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.pending = false;
          this.router.navigate(['/login']);
      },
      (error) =>{
        this.pending = false;
        this.message = error;
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
