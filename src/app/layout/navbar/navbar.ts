import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS }  from '../../core/constants/navigation';

export interface NotificationItem {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  link: string;
  read_at: string | null;
}

export interface UserMenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  brandName = 'AngBids';
  navItems = NAV_ITEMS;
  
  // Toggle this boolean to test both Guest and Member states
  isLoggedIn = false;
  
  currentUser = {
    username: 'Demo User',
    email: 'demo@angbids.com',
    avatarUrl: 'https://ui-avatars.com/api/?name=Demo+User&background=random'
  };

  unreadNotificationsCount = 2;

  notifications: NotificationItem[] = [
    {
      id: 1,
      type: 'auction_won',
      title: 'You won the auction!',
      message: 'Congratulations, you are the highest bidder.',
      time: '2 mins ago',
      link: '/user/winning-items',
      read_at: null
    },
    {
      id: 2,
      type: 'auction_cancelled',
      title: 'Auction Cancelled',
      message: 'An auction you bid on was cancelled.',
      time: '1 hour ago',
      link: '/user/my-bids',
      read_at: null
    }
  ];

  userMenu: UserMenuItem[] = [
    { label: 'Dashboard', icon: 'fas fa-th-large', route: '/user/dashboard' },
    { label: 'My Auctions', icon: 'fas fa-gavel', route: '/user/my-auctions' },
    { label: 'My Bids', icon: 'fas fa-rupee-sign', route: '/user/my-bids' },
    { label: 'Won Items', icon: 'fas fa-trophy', route: '/user/winning-items' },
    { label: 'Watchlist', icon: 'fas fa-heart', route: '/user/watchlist' },
    { label: 'Profile', icon: 'fas fa-user-edit', route: '/profile/edit' }
  ];
}
