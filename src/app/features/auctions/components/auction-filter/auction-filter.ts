import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auction-filter.html',
  styleUrl: './auction-filter.scss'
})
export class AuctionFilterComponent {
  @Output() filterChange = new EventEmitter<{
    category: string;
    condition: string;
    endingSoon: boolean;
    featured: boolean;
  }>();

  categories = ['All', 'Watches', 'Automotive', 'Fine Art', 'Electronics', 'Antiques', 'Jewelry'];
  conditions = ['All', 'Pristine', 'New/Sealed', 'Excellent', 'Restored', 'Vintage'];

  selectedCategory = 'All';
  selectedCondition = 'All';
  endingSoonOnly = false;
  featuredOnly = false;

  onFilterUpdate() {
    this.filterChange.emit({
      category: this.selectedCategory,
      condition: this.selectedCondition,
      endingSoon: this.endingSoonOnly,
      featured: this.featuredOnly
    });
  }

  resetFilters() {
    this.selectedCategory = 'All';
    this.selectedCondition = 'All';
    this.endingSoonOnly = false;
    this.featuredOnly = false;
    this.onFilterUpdate();
  }
}
