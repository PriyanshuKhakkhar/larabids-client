import { Component, OnInit, OnDestroy } from '@angular/core';
import { STATS } from '../../../../core/constants/stats-data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats implements OnInit, OnDestroy {

  stats = structuredClone(STATS).map(item => ({
    ...item,
    currentCount: 0,
    finished: false
  }));
  private intervalId: any;

  ngOnInit() {
    // Incrementally animate numerical targets over ~1.5 seconds
    this.intervalId = setInterval(() => {
      let allFinished = true;
      this.stats.forEach(item => {
        if (item.currentCount < item.targetValue) {
          allFinished = false;
          item.currentCount += Math.max(1, Math.ceil(item.targetValue / 25));
          if (item.currentCount >= item.targetValue) {
            item.currentCount = item.targetValue;
            item.finished = true;
          }
        }
      });

      if (allFinished) {
        clearInterval(this.intervalId);
      }
    }, 50);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getFormattedValue(item: any): string {
    if (item.finished) {
      return item.displayValue;
    }
    const val = item.divider > 1 ? (item.currentCount / item.divider).toFixed(1) : item.currentCount;
    return `${item.prefix}${val}${item.suffix}`;
  }

}