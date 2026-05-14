import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './features/home/components/hero/hero';
import { Featured } from './features/home/components/featured/featured';
import { Categories } from './features/home/components/categories/categories';
import { LiveAuctions } from './features/home/components/live-auctions/live-auctions';
import { Stats } from './features/home/components/stats/stats';
import { TestimonialsComponent } from './features/home/components/testimonials/testimonials';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Featured, Categories, LiveAuctions, Stats, TestimonialsComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('larabids-client');
}
