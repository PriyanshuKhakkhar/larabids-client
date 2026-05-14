export interface AuctionItem {
  id: string | number;
  title: string;
  image: string;
  category: string;
  currentBid: string | number;
  startingPrice: string | number;
  bidsCount: number;
  secondsLeft: number;
  totalSeconds: number;
  seller: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  condition: string;
  isFeatured?: boolean;
  status: 'LIVE' | 'ENDING_SOON' | 'CLOSED';
}
