export interface RevenueData {
  name: string;
  value: number;
}

export interface ActivityData {
  day: string;
  users: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export const generateRevenueData = (): RevenueData[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 50000) + 15000,
  }));
};

export const generateActivityData = (): ActivityData[] => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    day,
    users: Math.floor(Math.random() * 2000) + 500,
  }));
};

export const generateCategoryData = (): CategoryData[] => {
  return [
    { name: 'Mobile', value: 400, color: 'hsl(var(--chart-1))' },
    { name: 'Desktop', value: 300, color: 'hsl(var(--chart-2))' },
    { name: 'Tablet', value: 300, color: 'hsl(var(--chart-3))' },
    { name: 'Other', value: 200, color: 'hsl(var(--chart-4))' },
  ];
};
