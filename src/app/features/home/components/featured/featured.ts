import { Component } from '@angular/core';
import { FEATURED_AUCTIONS } from '../../../../core/constants/auction-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured',
  imports: [RouterLink],
  templateUrl: './featured.html',
  styleUrl: './featured.scss'
})
export class Featured {

  auctions = FEATURED_AUCTIONS;

}