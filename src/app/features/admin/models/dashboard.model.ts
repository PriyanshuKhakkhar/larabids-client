export interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  linkText?: string;
  subText?: string;
  color: string;
}

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'badge' | 'action';
}

export interface RecentAuction {
  [key: string]: any;
  title: string;
  category: string;
  status: 'Pending' | 'Closed' | 'Live';
}

export interface QuickAction {
  label: string;
  icon: string;
  badge?: string;
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  tension?: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface DashboardData {
  stats: StatCard[];
  auctionStatusChart: ChartData;
  auctionsTrendChart: ChartData;
  recentAuctions: RecentAuction[];
  quickActions: QuickAction[];
}
