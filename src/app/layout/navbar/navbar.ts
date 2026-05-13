import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_ITEMS }  from '../../core/constants/navigation';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  brandName = 'AngBids';

  navItems = NAV_ITEMS;
}
