import { Component, OnInit, OnDestroy } from '@angular/core';
import { HERO_SLIDES } from '../../../../core/constants/hero-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit, OnDestroy {

  slides = HERO_SLIDES;

  currentIndex = 0;
  private intervalId: any;

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopTimer();
    this.startTimer();
  }

}