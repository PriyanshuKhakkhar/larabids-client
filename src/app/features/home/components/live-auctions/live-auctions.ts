import { Component, OnInit } from '@angular/core';
import { LIVE_AUCTIONS } from '../../../../core/constants/live-auction-data';

@Component({
  selector: 'app-live-auctions',
  standalone: true,
  imports: [],
  templateUrl: './live-auctions.html',
  styleUrl: './live-auctions.scss'
})
export class LiveAuctions implements OnInit {

  auctions = structuredClone(LIVE_AUCTIONS);

  ngOnInit() {

    setInterval(() => {

      this.auctions.forEach(item => {

        if(item.secondsLeft > 0){
          item.secondsLeft--;
        }

      });

    }, 1000);

  }

}