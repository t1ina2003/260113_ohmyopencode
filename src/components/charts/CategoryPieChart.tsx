import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "../ui/Card";

interface DataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

interface CategoryPieChartProps {
  data: DataPoint[];
}

export function CategoryPieChart({ data }: CategoryPieChartProps) {
  return (
    <Card className="h-[350px] flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">User Distribution</h3>
        <p className="text-sm text-muted-foreground">By device type</p>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value: number) => (
                <span className="text-sm text-muted-foreground ml-1">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
