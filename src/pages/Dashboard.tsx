import { Activity, DollarSign, MousePointer2, Users } from "lucide-react";
import { ActivityBarChart } from "../components/charts/ActivityBarChart";
import { CategoryPieChart } from "../components/charts/CategoryPieChart";
import { RevenueAreaChart } from "../components/charts/RevenueAreaChart";
import { StatCard } from "../components/dashboard/StatCard";
import { useRealtimeData } from "../hooks/useRealtimeData";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Dashboard() {
  const { revenueData, activityData, categoryData, stats } = useRealtimeData();

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your business metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Live Updates</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          trend={12.5}
          icon={DollarSign}
          color="text-primary"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          trend={8.2}
          icon={Users}
          color="text-emerald-500"
          delay={0.1}
        />
        <StatCard
          title="Bounce Rate"
          value={`${stats.bounceRate}%`}
          trend={-2.4}
          icon={Activity}
          color="text-rose-500"
          delay={0.2}
        />
        <StatCard
          title="New Signups"
          value={stats.newSignups.toLocaleString()}
          trend={18.2}
          icon={MousePointer2}
          color="text-purple-500"
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <motion.div className="lg:col-span-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <RevenueAreaChart data={revenueData} />
        </motion.div>

        <motion.div className="lg:col-span-3" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <ActivityBarChart data={activityData} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div className="lg:col-span-1" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <CategoryPieChart data={categoryData} />
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2 bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-sm"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          <div className="mb-4">
             <h3 className="text-lg font-semibold">Recent Transactions</h3>
             <p className="text-sm text-muted-foreground">Latest financial activity</p>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {i % 2 === 0 ? "N" : "S"}
                  </div>
                  <div>
                    <p className="font-medium">Subscription {i % 2 === 0 ? "Netflix" : "Spotify"}</p>
                    <p className="text-xs text-muted-foreground">Today, 12:{30 + i} PM</p>
                  </div>
                </div>
                <span className="font-semibold text-foreground">-${(10 * i).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
