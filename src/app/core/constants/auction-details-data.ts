export const AUCTION_DETAILS_MOCK = {
  id: 'lot-8842',
  title: 'Patek Philippe Nautilus 5711/1A-010 Blue Dial',
  category: 'Luxury Watches',
  description: 'An exceptionally preserved, fully authenticated timepiece complete with original stamped documentation, archival certificates, and presentation case.',
  mainImage: 'https://images.unsplash.com/photo-1524592094714-a57dc2095908?auto=format&fit=crop&w=800&q=80',
  thumbnails: [
    'https://images.unsplash.com/photo-1524592094714-a57dc2095908?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508656338575-de39486cdd2e?auto=format&fit=crop&w=800&q=80'
  ],
  seller: {
    name: 'Aurelius Vaults',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    verified: true,
    rating: '4.9',
    completedAuctions: 342
  },
  highestBid: 114500,
  minNextBid: 115000,
  secondsLeft: 18450, // dynamically decs in controller
  bidHistory: [
    { bidderName: 'Alex_R', amount: 114500, time: '12 mins ago', verified: true },
    { bidderName: 'Sovereign_9', amount: 112000, time: '45 mins ago', verified: true },
    { bidderName: 'CollectorX', amount: 108000, time: '2 hours ago', verified: false },
    { bidderName: 'VaultMaster', amount: 105000, time: '4 hours ago', verified: true }
  ]
};
