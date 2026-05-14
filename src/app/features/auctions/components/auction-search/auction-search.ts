import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auction-search.html',
  styleUrl: './auction-search.scss'
})
export class AuctionSearchComponent {
  @Output() searchSortChange = new EventEmitter<{ searchQuery: string; sortBy: string }>();

  searchQuery = '';
  sortBy = 'default';

  onParameterChange() {
    this.searchSortChange.emit({
      searchQuery: this.searchQuery,
      sortBy: this.sortBy
    });
  }
}
