'use client';
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LabelList, Pie, PieChart, CartesianGrid, XAxis, LineChart, Line, YAxis, Tooltip } from "recharts";
import ProgressBar from "./charts/ProgressBar";

// Data for Pie Chart and Bar Chart
const chartData1 = [
  { browser: "Bussiness", visitors: 295, fill: "#4285F4" },
  { browser: "Salary", visitors: 200, fill: "#1E90FF" },
  { browser: "Saving", visitors: 187, fill: "#FF7139" },
  { browser: "Personal", visitors: 173, fill: "#0078D7" },
  { browser: "other", visitors: 90, fill: "#A9A9A9" },
];

// const chartData2 = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

// Data for Line Chart (Transactions Over Time)
const transactionData = [
  { month: "January", amount: 10 },
  { month: "February", amount: 20 },
  { month: "March", amount: 30 },
  { month: "April", amount: 25 },
  { month: "May", amount: 40 },
];

// Chart Configurations
const chartConfig1 = {
  visitors: { label: "Visitors" },
  chrome: { label: "Bussiness" },
  safari: { label: "Salary" },
  firefox: { label: "Saving" },
  edge: { label: "Personal" },
  other: { label: "Other" },
} satisfies ChartConfig;

const chartConfig2 = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
} satisfies ChartConfig;

const Analytics = () => {
  const totalOutstanding = 300;
  const totalInvoices = 1000;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Browser Usage (Pie Chart) */}
      <Card>
        <CardHeader>
          <CardTitle>Accounts used by customer</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig1}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart width={250} height={250}>
              <ChartTooltip content={<ChartTooltipContent nameKey="visitors" hideLabel />} />
              <Pie data={chartData1} dataKey="visitors" nameKey="browser" fill="#8884d8" label>
                <LabelList dataKey="browser" position="inside" />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground">Showing total visitors for the last 6 months</div>
        </CardFooter>
      </Card>

      {/* Transactions Over Time (Line Chart) */}
      <Card>
        <CardHeader>
          <CardTitle>Transactions Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
          config={chartConfig2}
          className="w-full"
          >
            <LineChart width={330} height={320} data={transactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Outstanding Payments (Progress Bar) */}
      <Card>
        <CardHeader>
          <CardTitle>Outstanding Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressBar value={(totalOutstanding / totalInvoices) * 100} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
