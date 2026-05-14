import { Injectable } from '@angular/core';
import { AuctionItem } from '../models/auction.interface';
import { MOCK_AUCTIONS } from './mock-auctions';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  // Load deep structured copy so client array mutation remains scoped
  private auctionsData: AuctionItem[] = structuredClone(MOCK_AUCTIONS);

  getAuctions(): Observable<AuctionItem[]> {
    return of(this.auctionsData);
  }

  filterAuctions(params: {
    category?: string;
    condition?: string;
    endingSoon?: boolean;
    featured?: boolean;
    searchQuery?: string;
    sortBy?: string;
  }): AuctionItem[] {
    let result = [...this.auctionsData];

    if (params.category && params.category !== 'All') {
      result = result.filter(item => item.category === params.category);
    }

    if (params.condition && params.condition !== 'All') {
      result = result.filter(item => item.condition === params.condition);
    }

    if (params.endingSoon) {
      result = result.filter(item => item.secondsLeft <= 60 && item.secondsLeft > 0);
    }

    if (params.featured) {
      result = result.filter(item => item.isFeatured);
    }

    if (params.searchQuery && params.searchQuery.trim() !== '') {
      const q = params.searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );
    }

    // Sort logic
    if (params.sortBy) {
      if (params.sortBy === 'bidsDesc') {
        result.sort((a, b) => b.bidsCount - a.bidsCount);
      } else if (params.sortBy === 'endingSoon') {
        result.sort((a, b) => {
          if (a.secondsLeft === 0) return 1;
          if (b.secondsLeft === 0) return -1;
          return a.secondsLeft - b.secondsLeft;
        });
      }
    }

    return result;
  }
}
