import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../../models/auction.interface';
import { AuctionService } from '../../services/auction.service';
import { AuctionCardComponent } from '../../components/auction-card/auction-card';
import { AuctionFilterComponent } from '../../components/auction-filter/auction-filter';
import { AuctionSearchComponent } from '../../components/auction-search/auction-search';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auctions-list',
  standalone: true,
  imports: [AuctionCardComponent, AuctionFilterComponent, AuctionSearchComponent, FormsModule],
  templateUrl: './auctions-list.html',
  styleUrl: './auctions-list.scss'
})
export class AuctionsListComponent implements OnInit {
  
  filteredAuctions: AuctionItem[] = [];
  displayedAuctions: AuctionItem[] = [];
  
  // Query state
  searchQuery = '';
  sortBy = 'default';
  
  // Persistent filter caches
  currentFilterParams: any = {};
  
  // Slice pagination bounds
  pageSize = 8;
  currentPage = 1;

  constructor(private auctionService: AuctionService) {}

  ngOnInit() {
    this.applyAllFilters();
  }

  onFilterChanged(params: any) {
    this.currentFilterParams = params;
    this.currentPage = 1;
    this.applyAllFilters();
  }

  onSearchOrSort() {
    this.currentPage = 1;
    this.applyAllFilters();
  }

  onSearchSortUpdated(ev: { searchQuery: string; sortBy: string }) {
    this.searchQuery = ev.searchQuery;
    this.sortBy = ev.sortBy;
    this.currentPage = 1;
    this.applyAllFilters();
  }

  applyAllFilters() {
    this.filteredAuctions = this.auctionService.filterAuctions({
      ...this.currentFilterParams,
      searchQuery: this.searchQuery,
      sortBy: this.sortBy
    });
    this.updatePaginationView();
  }

  updatePaginationView() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedAuctions = this.filteredAuctions.slice(0, startIndex + this.pageSize);
  }

  loadMore() {
    this.currentPage++;
    this.updatePaginationView();
  }

  get hasMoreItems(): boolean {
    return this.displayedAuctions.length < this.filteredAuctions.length;
  }
}
