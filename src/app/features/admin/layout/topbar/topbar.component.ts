import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isSidebarCollapsed = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.isSidebarCollapsed$.subscribe(
      (collapsed) => this.isSidebarCollapsed = collapsed
    );
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }
}
