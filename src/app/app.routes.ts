import { Routes } from '@angular/router';

import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register').then(m => m.RegisterComponent)
      },
      {
        path: 'auctions',
        loadComponent: () => import('./features/auctions/pages/auctions-list/auctions-list').then(m => m.AuctionsListComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/pages/about-page/about-page').then(m => m.AboutPageComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/pages/contact-page/contact-page').then(m => m.ContactPageComponent)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./features/admin/layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    ]
  }
];
