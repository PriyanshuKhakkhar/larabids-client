import { Component } from '@angular/core';
import { STATS } from '../../../../core/constants/stats-data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {

  stats = STATS;

}