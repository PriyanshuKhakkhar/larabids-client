import { Component, OnInit } from '@angular/core';
import { HERO_SLIDES } from '../../../../core/constants/hero-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {

  slides = HERO_SLIDES;

  currentIndex = 0;

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  ngOnInit() {

    setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.slides.length;

    }, 3000);

  }

}