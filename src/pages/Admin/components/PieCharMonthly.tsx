import { useMemo } from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Sample data for appointments per month by payment method
const chartData = [
  { paymentMethod: "credit_card", appointments: 120, fill: "#ccc" },
  { paymentMethod: "cash", appointments: 150, fill: "#d21c" },
  { paymentMethod: "bank_transfer", appointments: 100, fill: "#2662D9" },
  { paymentMethod: "other", appointments: 50, fill: "var(--color-other)" },
]

const chartConfig = {
  appointments: {
    label: "Appointments",
  },
  credit_card: {
    label: "Credit Card",
    color: "hsl(var(--chart-1))",
  },
  cash: {
    label: "Cash",
    color: "hsl(var(--chart-3))",
  },
  bank_transfer: {
    label: "Bank Transfer",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieCharMonthly() {
  const totalAppointments = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.appointments, 0)
  }, [])

  return (
    <Card className="flex flex-col w-[50%]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Quotes Monthly</CardTitle>
        <CardDescription>November - 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
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
              data={chartData}
              dataKey="appointments"
              nameKey="paymentMethod"
              innerRadius={60}
              strokeWidth={5}
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAppointments.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Money
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
