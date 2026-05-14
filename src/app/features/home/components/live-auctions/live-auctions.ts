import { Component, OnInit, OnDestroy } from '@angular/core';
import { LIVE_AUCTIONS } from '../../../../core/constants/live-auction-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-live-auctions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './live-auctions.html',
  styleUrl: './live-auctions.scss'
})
export class LiveAuctions implements OnInit, OnDestroy {

  auctions = structuredClone(LIVE_AUCTIONS);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.auctions.forEach(item => {
        if(item.secondsLeft > 0) {
          item.secondsLeft--;
        }
      });
    }, 1000);
  }

  ngOnDestroy() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  formatTime(secs: number): string {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  }

  getProgress(item: any): number {
    if(!item.totalSeconds) return 0;
    // Return rounded integer for direct template text and CSS binding
    return Math.round(Math.min(100, Math.max(0, ((item.totalSeconds - item.secondsLeft) / item.totalSeconds) * 100)));
  }

}