"use client"; // ضروري في Next.js App Router

import { topProducts } from "@/constant/topProducts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// تسجيل المكونات المطلوبة في Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// بيانات وهمية
const data: ChartData<"bar"> = {
  labels: topProducts.map((product) => product.name),
  datasets: [
    {
      label: "Units Sold",
      data: topProducts.map((product) => product.sales),
      backgroundColor: topProducts.map(
        (_, i) => ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][i]
      ),
    },
  ],
};

// خيارات الشارت
const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Top Selling Products",
      position: "top"
    },
  },
};

const TopSellingProductsChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 lg:col-span-2 p-4 rounded-xl shadow w-full h-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopSellingProductsChart;
