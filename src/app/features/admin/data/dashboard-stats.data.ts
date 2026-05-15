import { DashboardData } from '../models/dashboard.model';

export const DASHBOARD_MOCK_DATA: DashboardData = {
  stats: [
    { title: 'TOTAL USERS', value: '10', icon: 'fa-users', linkText: 'View Directory →', color: '#06b6d4' },
    { title: 'PENDING KYC ACTIONS', value: '0', icon: 'fa-id-card', linkText: 'Review Documents →', color: '#ef4444' },
    { title: 'TOTAL SALES VOLUME', value: '₹0.00', icon: 'fa-wallet', subText: 'Online Payments Activity', color: '#10b981' },
    { title: 'TOTAL COMMISSION (5%)', value: '₹0.00', icon: 'fa-hand-holding-dollar', subText: 'Platform cut from online payments', color: '#3b82f6' },
    { title: 'LIVE CATEGORIES', value: '23', icon: 'fa-tags', linkText: 'Manage →', color: '#eab308' },
    { title: 'ENGAGEMENT (TOTAL BIDS)', value: '318', icon: 'fa-gavel', subText: 'Overall Activity', color: '#3b82f6' },
    { title: 'ACTIVITY TODAY', value: '0 Bids', icon: 'fa-chart-line', subText: 'Daily Engagement', color: '#10b981' },
    { title: 'UNREAD SUPPORT MSG', value: '0', icon: 'fa-envelope', linkText: 'Reply Now →', color: '#ef4444' }
  ],
  auctionStatusChart: {
    labels: ['Live', 'Upcoming', 'Pending', 'Closed', 'Cancelled'],
    datasets: [
      {
        label: 'Auctions by Status',
        data: [25, 10, 15, 45, 5],
        backgroundColor: ['#10b981', '#eab308', '#0ea5e9', '#64748b', '#ef4444'],
        borderWidth: 0
      }
    ]
  },
  auctionsTrendChart: {
    labels: ['Dec 2025', 'Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026'],
    datasets: [
      {
        label: 'Auctions Trend',
        data: [0, 0, 0, 0, 0, 78],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }
    ]
  },
  recentAuctions: [
    { title: 'Samsung s25', category: 'Smartphones', status: 'Pending' },
    { title: 'watch', category: 'Smartphones', status: 'Closed' },
    { title: 'Mac air m1', category: 'Laptops', status: 'Closed' },
    { title: 'hcuvivi', category: 'Muscle Cars', status: 'Pending' },
    { title: 'OnePlus Nord Buds 3', category: 'Audio', status: 'Closed' }
  ],
  quickActions: [
    { label: 'Manage Auctions', icon: 'fa-gavel' },
    { label: 'Manage Users', icon: 'fa-users' },
    { label: 'Manage KYC', icon: 'fa-id-card' },
    { label: 'Manage Payments', icon: 'fa-wallet', badge: '21 Pending' },
    { label: 'Manage Categories', icon: 'fa-tags' },
    { label: 'View Contacts', icon: 'fa-envelope' },
    { label: 'Manage Disputes', icon: 'fa-scale-balanced' }
  ]
};
