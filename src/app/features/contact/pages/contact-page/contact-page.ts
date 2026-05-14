import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPageComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitted = false;
  submissionSuccess = false;

  // SECTION 2 — Contact Info Cards
  contactCards = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Support Desk',
      detail: 'support@angbids.internal',
      subtitle: 'Average operational response routing under 2 hours.'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone Operations',
      detail: '+1 (800) 555-BIDS',
      subtitle: 'Toll-free clearing support corridors available 24/7.'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Corporate HQ',
      detail: '742 Evergreen Terrace, Sector 7G',
      subtitle: 'Certified asset verification custody warehouse.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Routing Hours',
      detail: 'Monday – Friday, 08:00 – 20:00 EST',
      subtitle: 'Automated digital clearance systems active continuously.'
    }
  ];

  // SECTION 4 — FAQ Quick Help Modules
  faqModules = [
    {
      icon: 'fas fa-gavel',
      title: 'Certified Vendor Guidance',
      summary: 'Learn how to calibrate dynamic starting prices, establish fallback reserve parameter chips, and broadcast live physical lots.'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'High-Intent Buyer Setup',
      summary: 'Initialize certified bidding wallets, review multi-signature verification procedures, and understand continuous increment steps.'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Escrow Settlement Logistics',
      summary: 'Access secure cross-border routing maps, track escrow clearance stages, and manage instant fund liquidation pipelines.'
    },
    {
      icon: 'fas fa-sliders-h',
      title: 'Identity & Wallet Custody',
      summary: 'Update secondary notification webhooks, reset 2FA multi-signature bindings, and delegate trusted secondary operators.'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Mapping full name UI view to API compatible 'name' payload property natively
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\s\(\)]{7,20}$/)]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      // Map form payload directly aligning with Laravel backend validation schemas
      const payload = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };
      
      console.log('Secure Contact Transmission Payload:', payload);
      this.submissionSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;

      // Automatically reset alert banner state after period
      setTimeout(() => {
        this.submissionSuccess = false;
      }, 6000);
    } else {
      // Mark all fields touched to trigger instant inline UI alert feedback
      Object.keys(this.contactForm.controls).forEach(key => {
        const ctrl = this.contactForm.get(key);
        ctrl?.markAsTouched();
      });
    }
  }

  // Quick UI validation getter helpers
  isInvalid(controlName: string): boolean {
    const ctrl = this.contactForm.get(controlName);
    return !!ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.isSubmitted);
  }

}
