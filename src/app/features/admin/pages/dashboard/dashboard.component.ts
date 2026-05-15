import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

import { DashboardService } from '../../services/dashboard.service';
import { DashboardData, TableColumn } from '../../models/dashboard.model';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { DataTableComponent } from '../../../../shared/components/data-table/data-table.component';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, DataTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  data: DashboardData | null = null;
  isLoading = true;
  private destroy$ = new Subject<void>();

  @ViewChild('statusChart') statusChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('trendChart') trendChartRef!: ElementRef<HTMLCanvasElement>;

  private statusChartInstance: Chart | null = null;
  private trendChartInstance: Chart | null = null;
  private isBrowser: boolean;

  tableColumns: TableColumn[] = [
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'category', label: 'Category', type: 'text' },
    { key: 'status', label: 'Status', type: 'badge' },
    { key: 'action', label: 'Action', type: 'action' }
  ];

  constructor(
    private dashboardService: DashboardService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.dashboardService.getDashboardData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.data = res;
          this.isLoading = false;
          if (this.isBrowser) {
            setTimeout(() => this.initCharts(), 0);
          }
        },
        error: (err) => {
          console.error('Error fetching dashboard data', err);
          this.isLoading = false;
        }
      });
  }

  ngAfterViewInit(): void {
    if (!this.isLoading && this.data && this.isBrowser) {
      this.initCharts();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.statusChartInstance) this.statusChartInstance.destroy();
    if (this.trendChartInstance) this.trendChartInstance.destroy();
  }

  private initCharts(): void {
    if (!this.statusChartRef || !this.trendChartRef || !this.data) return;

    if (this.statusChartInstance) this.statusChartInstance.destroy();
    if (this.trendChartInstance) this.trendChartInstance.destroy();

    const statusCtx = this.statusChartRef.nativeElement.getContext('2d');
    if (statusCtx) {
      const config: ChartConfiguration<'doughnut'> = {
        type: 'doughnut',
        data: this.data.auctionStatusChart as any,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { 
              position: 'bottom',
              labels: { usePointStyle: true, boxWidth: 8, padding: 20 }
            }
          },
          cutout: '60%'
        }
      };
      this.statusChartInstance = new Chart(statusCtx, config);
    }

    const trendCtx = this.trendChartRef.nativeElement.getContext('2d');
    if (trendCtx) {
      const config: ChartConfiguration<'line'> = {
        type: 'line',
        data: this.data.auctionsTrendChart as any,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 78, ticks: { stepSize: 6 }, grid: { color: '#e5e7eb' } },
            x: { grid: { display: false } }
          }
        }
      };
      this.trendChartInstance = new Chart(trendCtx, config);
    }
  }
}
