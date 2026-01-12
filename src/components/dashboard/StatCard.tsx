import { type LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "../../lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
  color?: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  trend,
  icon: Icon,
  color = "text-primary",
  delay = 0,
}: StatCardProps) {
  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
      transition={{ delay }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1 tracking-tight">{value}</h3>
        </div>
        <div className={cn("p-3 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors", color)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            trend >= 0
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-rose-500/10 text-rose-500"
          )}
        >
          {trend >= 0 ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(trend)}%
        </div>
        <p className="text-xs text-muted-foreground">vs last month</p>
      </div>
    </Card>
  );
}
