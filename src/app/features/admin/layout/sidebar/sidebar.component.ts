import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

interface MenuSection {
  title?: string;
  items: { label: string; icon: string; route: string; active?: boolean }[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;

  menuSections: MenuSection[] = [
    {
      items: [
        { label: 'Dashboard', icon: 'fa-solid fa-gauge', route: '/admin/dashboard', active: true }
      ]
    },
    {
      title: 'MANAGEMENT',
      items: [
        { label: 'Auctions', icon: 'fa-solid fa-gavel', route: '/admin/auctions' },
        { label: 'Manage Users', icon: 'fa-solid fa-users', route: '/admin/users' },
        { label: 'KYC Verification', icon: 'fa-solid fa-user-check', route: '/admin/kyc' },
        { label: 'Payments', icon: 'fa-solid fa-wallet', route: '/admin/payments' },
        { label: 'Disputes & Reports', icon: 'fa-solid fa-scale-balanced', route: '/admin/reports' }
      ]
    },
    {
      title: 'SYSTEM CONFIG',
      items: [
        { label: 'Categories', icon: 'fa-solid fa-list-ul', route: '/admin/categories' },
        { label: 'Contact Messages', icon: 'fa-solid fa-envelope', route: '/admin/messages' },
        { label: 'Settings', icon: 'fa-solid fa-gear', route: '/admin/settings' }
      ]
    },
    {
      title: 'ACCOUNT',
      items: [
        { label: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', route: '/admin/logout' }
      ]
    }
  ];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.isSidebarCollapsed$.subscribe(
      (collapsed) => this.isCollapsed = collapsed
    );
  }
}
