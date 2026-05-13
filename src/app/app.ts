import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './features/home/components/hero/hero';
import { Featured } from './features/home/components/featured/featured';
import { Categories } from './features/home/components/categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Featured, Categories],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('larabids-client');
}
