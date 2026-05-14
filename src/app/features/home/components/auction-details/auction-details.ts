import { Component, OnInit, OnDestroy } from '@angular/core';
import { AUCTION_DETAILS_MOCK } from '../../../../core/constants/auction-details-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auction-details.html',
  styleUrl: './auction-details.scss'
})
export class AuctionDetails implements OnInit, OnDestroy {

  auction = structuredClone(AUCTION_DETAILS_MOCK);
  activeImage = this.auction.mainImage;
  isWatchlisted = false;
  customBidAmount = this.auction.minNextBid;
  bidSuccessMessage = '';

  private intervalId: any;

  ngOnInit() {
    // Reactive countdown sequence setup
    this.intervalId = setInterval(() => {
      if (this.auction.secondsLeft > 0) {
        this.auction.secondsLeft--;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  selectThumbnail(imgUrl: string) {
    this.activeImage = imgUrl;
  }

  toggleWatchlist() {
    this.isWatchlisted = !this.isWatchlisted;
  }

  placeCustomBid() {
    if (this.customBidAmount >= this.auction.minNextBid) {
      // Register custom new highest bid to local mock tracking store
      this.auction.highestBid = this.customBidAmount;
      this.auction.minNextBid = this.customBidAmount + 500;
      
      // Unshift to place at the very top of recent history logs
      this.auction.bidHistory.unshift({
        bidderName: 'You (Verified)',
        amount: this.customBidAmount,
        time: 'Just now',
        verified: true
      });

      // Prepare subsequent recommended increments dynamically
      this.customBidAmount = this.auction.minNextBid;
      
      // Flash state success message alert
      this.bidSuccessMessage = 'Bid submitted and secured via test network!';
      setTimeout(() => {
        this.bidSuccessMessage = '';
      }, 4000);
    }
  }

  formatTimer(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }

}
