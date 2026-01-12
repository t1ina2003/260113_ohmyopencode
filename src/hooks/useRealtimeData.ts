import { useEffect, useState } from "react";
import {
  generateActivityData,
  generateCategoryData,
  generateRevenueData,
  type ActivityData,
  type CategoryData,
  type RevenueData,
} from "../services/mockData";

export function useRealtimeData() {
  const [revenueData, setRevenueData] = useState<RevenueData[]>([]);
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  
  const [totalRevenue, setTotalRevenue] = useState(45231);
  const [activeUsers, setActiveUsers] = useState(2350);
  const [bounceRate] = useState(42.3);
  const [newSignups] = useState(128);

  useEffect(() => {
    setRevenueData(generateRevenueData());
    setActivityData(generateActivityData());
    setCategoryData(generateCategoryData());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenueData((prev) => {
        if (prev.length === 0) return prev;
        const newData = [...prev];
        const lastIndex = newData.length - 1;
        const variance = Math.floor(Math.random() * 2000) - 1000;
        newData[lastIndex] = {
          ...newData[lastIndex],
          value: Math.max(10000, newData[lastIndex].value + variance),
        };
        return newData;
      });

      if (Math.random() > 0.7) {
         setActivityData(generateActivityData());
      }

      setTotalRevenue((prev) => prev + Math.floor(Math.random() * 100) - 20);
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 5);
      
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return {
    revenueData,
    activityData,
    categoryData,
    stats: {
      totalRevenue,
      activeUsers,
      bounceRate,
      newSignups
    }
  };
}
