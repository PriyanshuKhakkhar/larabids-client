import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.maxLength(120)]],
      last_name: ['', [Validators.required, Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: AbstractControl): ValidationErrors | null {
    const password = g.get('password')?.value;
    const confirmPassword = g.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    
    if (this.registerForm.valid) {
      const { confirmPassword, ...data } = this.registerForm.value;
      const payload = {
        ...data,
        password_confirmation: confirmPassword
      };

      this.authService.register(payload).subscribe({
        next: () => {
          this.successMessage = 'Account initialized successfully! An OTP has been sent to your email.';
          setTimeout(() => {
            this.router.navigate(['/auth/verify-otp'], { queryParams: { email: payload.email } });
          }, 1500);
        },
        error: (err) => {
          if (err.status === 422 && err.error.errors) {
            this.errorMessage = Object.values(err.error.errors).flat().join(' ');
          } else {
            this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
          }
          console.error('Registration failed', err);
        }
      });
    }
  }

}
