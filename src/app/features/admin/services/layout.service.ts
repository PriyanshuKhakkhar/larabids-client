import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isSidebarCollapsedSubject = new BehaviorSubject<boolean>(false);
  isSidebarCollapsed$ = this.isSidebarCollapsedSubject.asObservable();

  toggleSidebar(): void {
    this.isSidebarCollapsedSubject.next(!this.isSidebarCollapsedSubject.value);
  }

  setSidebarCollapsed(collapsed: boolean): void {
    this.isSidebarCollapsedSubject.next(collapsed);
  }
}
