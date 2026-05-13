import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {

  testimonials: Testimonial[] = [
    {
      name: 'Rahul Sharma',
      role: 'Verified Buyer',
      text: 'AngBids completely changed how I shop for rare collectibles. I won three exclusive items at unbeatable prices. The bidding experience is seamless and trustworthy.',
      initials: 'RS',
      stars: 5
    },
    {
      name: 'Priya Patel',
      role: 'Top Seller',
      text: 'Listing my items on AngBids has been a game-changer. The platform is secure, the buyer pool is huge, and my auctions consistently close above asking price.',
      initials: 'PP',
      stars: 5
    },
    {
      name: 'Amit Verma',
      role: 'Art Collector',
      text: 'As a serious collector, I need a platform I can trust. AngBids delivers a truly professional bidding experience with real-time updates and zero surprises.',
      initials: 'AV',
      stars: 5
    }
  ];

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}