import { AuctionItem } from '../models/auction.interface';

export const MOCK_AUCTIONS: AuctionItem[] = [
  {
    id: 'AUC-101',
    title: 'Patek Philippe Nautilus 5711 Luxury Chronograph',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80',
    category: 'Watches',
    currentBid: '$84,500',
    startingPrice: '$65,000',
    bidsCount: 28,
    secondsLeft: 3400,
    totalSeconds: 86400,
    seller: {
      name: 'ChronoVault Ltd',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    condition: 'Pristine',
    isFeatured: true,
    status: 'LIVE'
  },
  {
    id: 'AUC-102',
    title: '1967 Shelby GT500 Fastback Eleanor Edition',
    image: 'https://images.unsplash.com/photo-1611821064430-0d40229e0000?auto=format&fit=crop&w=600&q=80',
    category: 'Automotive',
    currentBid: '$210,000',
    startingPrice: '$150,000',
    bidsCount: 42,
    secondsLeft: 45,
    totalSeconds: 43200,
    seller: {
      name: 'Marcus Brody',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    condition: 'Restored',
    isFeatured: true,
    status: 'ENDING_SOON'
  },
  {
    id: 'AUC-103',
    title: 'Original Renaissance Oil Canvas - Unknown Master',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    category: 'Fine Art',
    currentBid: '$32,000',
    startingPrice: '$12,000',
    bidsCount: 15,
    secondsLeft: 18500,
    totalSeconds: 172800,
    seller: {
      name: 'Louvre Antiquities',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
      verified: false
    },
    condition: 'Excellent',
    isFeatured: false,
    status: 'LIVE'
  },
  {
    id: 'AUC-104',
    title: 'Leica M11 Mirrorless Rangefinder + Summilux Lens',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    category: 'Electronics',
    currentBid: '$8,900',
    startingPrice: '$7,000',
    bidsCount: 19,
    secondsLeft: 1200,
    totalSeconds: 36000,
    seller: {
      name: 'OpticPro HQ',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    condition: 'New/Sealed',
    isFeatured: false,
    status: 'LIVE'
  },
  {
    id: 'AUC-105',
    title: 'Mid-Century Modern Teak Credenza Sideboard',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    category: 'Antiques',
    currentBid: '$4,200',
    startingPrice: '$2,500',
    bidsCount: 9,
    secondsLeft: 0,
    totalSeconds: 20000,
    seller: {
      name: 'Herman Miller Hub',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    condition: 'Vintage',
    isFeatured: false,
    status: 'CLOSED'
  },
  {
    id: 'AUC-106',
    title: 'Custom Diamond Encrusted Platinum Signet Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    category: 'Jewelry',
    currentBid: '$18,400',
    startingPrice: '$15,000',
    bidsCount: 31,
    secondsLeft: 35,
    totalSeconds: 50000,
    seller: {
      name: 'Gems & Jewels Group',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    condition: 'Pristine',
    isFeatured: true,
    status: 'ENDING_SOON'
  }
];
