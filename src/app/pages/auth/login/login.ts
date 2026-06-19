import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.successMessage = 'Authentication successful! Accessing vault...';
          
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/dashboard';
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigateByUrl(returnUrl);
          }, 1000);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Authentication failed. Please verify your credentials.';
          this.submitted = false; // Allow re-submit attempt easily
          console.error('Login error detail:', err);
        }
      });
    }
  }

}
