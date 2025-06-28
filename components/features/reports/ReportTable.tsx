"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1900, 3000, 2500, 2800, 3400],
      backgroundColor: "#3b82f6",
    },
  ],
};

const pieChartData = {
  labels: ["Credit Card", "PayPal", "Cash"],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
    },
  ],
};

export default function ReportTable() {
  return (
    <div className="grid gap-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>$12,500</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>320</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Order Value</CardTitle>
          </CardHeader>
          <CardContent>$39.06</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Customers</CardTitle>
          </CardHeader>
          <CardContent>58</CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={barChartData} className="w-full h-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={pieChartData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
