import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPageComponent {

  // SECTION 3 — Platform Stats Records
  platformStats = [
    { id: 'auctions', value: '45,000+', label: 'Active Auctions', subtitle: 'Dynamic high-demand exchange lots live globally.' },
    { id: 'users', value: '1.2M+', label: 'Registered Users', subtitle: 'Verified buyers & certified elite secondary asset vendors.' },
    { id: 'sales', value: '$840M+', label: 'Successful Sales', subtitle: 'Authoritative transaction clearance volumes completed.' },
    { id: 'countries', value: '120+', label: 'Countries Served', subtitle: 'Distributed multi-jurisdictional logistics corridors.' }
  ];

  // SECTION 4 — Why Choose Us Records
  chooseUsFeatures = [
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Secure Custody & Payments', 
      description: 'Integrated robust parameter reserves, escrow-grade financial clearance pipelines, and instant verifiable multi-signature custody execution.' 
    },
    { 
      icon: 'fas fa-user-check', 
      title: 'Certified Verified Sellers', 
      description: 'Rigorous onboarding matrix mandates, corporate AML vetting, and continuous operational quality monitoring for maximum consumer trust.' 
    },
    { 
      icon: 'fas fa-bolt', 
      title: 'Real-Time Sync Bidding', 
      description: 'Ultra-low latency web-socket stream proxy networks delivering synchronized bid matrix notifications directly to the browser view.' 
    },
    { 
      icon: 'fas fa-headset', 
      title: '24/7 Elite Operations Desk', 
      description: 'Dedicated client relationship officers available round the clock to facilitate custom cross-border escrow settlements and dispute routing.' 
    }
  ];

  // SECTION 5 — Founders & Team Section
  teamMembers = [
    {
      name: 'Alexander Sterling',
      role: 'Chief Executive Officer & Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Pioneered decentralized secondary clearing algorithms following 12 years heading quantitative derivatives desks at premier global financial institutions.'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Former principal distributed systems architect. Spearheads extreme high-throughput low-latency real-time state network layers.'
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Global Escrow & Legal',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      bio: 'Directs multi-jurisdictional compliance corridors, cross-border tokenized equity structures, and institutional asset verification frameworks.'
    }
  ];

}
