import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../../../core/constants/testimonials-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {

  testimonials = TESTIMONIALS;

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }

}