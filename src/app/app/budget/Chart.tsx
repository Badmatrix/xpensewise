"use client";
import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency, getTotal } from "@/lib/helper";
import { Budgets } from "@/types/types";
import { Cell, Label, Pie, PieChart } from "recharts";

type Props = {
  budgets: Budgets[];
  total: number;
};
const chartConfig = {};
function Chart({ budgets, total }: Props) {
  const maxBudget = getTotal(budgets);
  return (
    <CardContent>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={budgets}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={1}
            dataKey="maximum"
            nameKey="amount"
            strokeWidth={5}
            fill="#8884d8"
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-xl font-bold"
                      >
                        {formatCurrency(total)}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="text-sm"
                      >
                        of {formatCurrency(maxBudget)}
                      </tspan>
                    </text>
                  );
                }
              }}
            />

            {budgets.map((entry) => (
              <Cell
                key={entry.category}
                fill={entry.theme}
                stroke={entry.theme}
              />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
  );
}

export default Chart;
