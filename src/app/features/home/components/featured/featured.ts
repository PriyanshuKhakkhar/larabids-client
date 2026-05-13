import { Component } from '@angular/core';
import { FEATURED_AUCTIONS } from '../../../../core/constants/auction-data';

@Component({
  selector: 'app-featured',
  imports: [],
  templateUrl: './featured.html',
  styleUrl: './featured.scss'
})
export class Featured {

  auctions = FEATURED_AUCTIONS;

}