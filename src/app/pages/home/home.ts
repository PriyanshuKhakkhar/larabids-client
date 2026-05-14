import { Component } from '@angular/core';
import { Hero } from '../../features/home/components/hero/hero';
import { Featured } from '../../features/home/components/featured/featured';
import { Categories } from '../../features/home/components/categories/categories';
import { LiveAuctions } from '../../features/home/components/live-auctions/live-auctions';
import { Stats } from '../../features/home/components/stats/stats';
import { TestimonialsComponent } from '../../features/home/components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Featured, Categories, LiveAuctions, Stats, TestimonialsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
