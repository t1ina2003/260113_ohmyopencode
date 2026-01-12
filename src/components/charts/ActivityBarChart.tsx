import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Card } from "../ui/Card";

interface DataPoint {
  day: string;
  users: number;
}

interface ActivityBarChartProps {
  data: DataPoint[];
}

export function ActivityBarChart({ data }: ActivityBarChartProps) {
  return (
    <Card className="h-[300px] flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Weekly Activity</h3>
        <p className="text-sm text-muted-foreground">Active users per day</p>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              dy={10}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted)/0.2)" }}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar
              dataKey="users"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
