import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardData } from '../models/dashboard.model';
import { DASHBOARD_MOCK_DATA } from '../data/dashboard-stats.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDashboardData(): Observable<DashboardData> {
    return of(DASHBOARD_MOCK_DATA).pipe(delay(200));
  }
}
