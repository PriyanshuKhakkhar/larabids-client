import { Component, Input } from '@angular/core';
import { AuctionItem } from '../../models/auction.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auction-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auction-card.html',
  styleUrl: './auction-card.scss'
})
export class AuctionCardComponent {
  @Input() item!: AuctionItem;

  formatTime(secs: number): string {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  }

  getProgress(): number {
    if (!this.item || !this.item.totalSeconds) return 0;
    return Math.round(Math.min(100, Math.max(0, ((this.item.totalSeconds - this.item.secondsLeft) / this.item.totalSeconds) * 100)));
  }
}
