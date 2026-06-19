import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DashboardData, ChartData, StatCard, RecentAuction, QuickAction } from '../models/dashboard.model';
import { environment } from '../../../../environments/environment';
import { DASHBOARD_MOCK_DATA } from '../data/dashboard-stats.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    const stats$ = this.http.get<any>(`${environment.apiUrl}/admin/dashboard`).pipe(
      catchError(err => {
        console.warn('Failed to fetch dashboard stats, falling back to mock structure', err);
        return of(null);
      })
    );

    const charts$ = this.http.get<any>(`${environment.apiUrl}/admin/dashboard/chart-data`).pipe(
      catchError(err => {
        console.warn('Failed to fetch chart data', err);
        return of(null);
      })
    );

    return forkJoin({ stats: stats$, charts: charts$ }).pipe(
      map(({ stats, charts }) => this.mapToDashboardData(stats, charts))
    );
  }

  private mapToDashboardData(apiStats: any, apiCharts: any): DashboardData {
    // If API fails completely, fallback to mock data to prevent UI crashes during transition
    if (!apiStats && !apiCharts) {
      return DASHBOARD_MOCK_DATA;
    }

    // Map Backend Stats (Assuming a generic structure, otherwise use fallback logic)
    const stats: StatCard[] = apiStats?.stats ? this.mapBackendStats(apiStats.stats) : DASHBOARD_MOCK_DATA.stats;
    const recentAuctions: RecentAuction[] = apiStats?.recentAuctions || DASHBOARD_MOCK_DATA.recentAuctions;
    const quickActions: QuickAction[] = apiStats?.quickActions || DASHBOARD_MOCK_DATA.quickActions;

    // Map Backend Charts
    const auctionStatusChart: ChartData = apiCharts?.auctionStatusChart || DASHBOARD_MOCK_DATA.auctionStatusChart;
    const auctionsTrendChart: ChartData = apiCharts?.auctionsTrendChart || DASHBOARD_MOCK_DATA.auctionsTrendChart;

    return {
      stats,
      auctionStatusChart,
      auctionsTrendChart,
      recentAuctions,
      quickActions
    };
  }

  private mapBackendStats(backendStats: any): StatCard[] {
    // Dynamically map backend keys if they differ, for now return as is if they match the interface
    return backendStats;
  }
}
