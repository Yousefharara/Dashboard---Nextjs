"use client"; // إذا كنت في App Router (Next.js 13+)

import { mostActiveCustomers } from "@/constant/mostActiveCustomers";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { useTheme } from "next-themes";
import { Pie } from "react-chartjs-2";

// تسجيل العناصر اللازمة
ChartJS.register(ArcElement, Tooltip, Legend);




const MostActiveCustomersChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const labelColor = isDark ? "#e9e9e9" : "#111";
  const gridColor = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.05)";

  const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: labelColor, // لون النص في الوضع الداكن
      },
    },
    title: {
      display: true,
      text: "Most Active Customers",
      color: labelColor, // لون عنوان الشارت
    },
    tooltip: {
      bodyColor: "#f9f9f9", // لون النص داخل التولتيب
      backgroundColor: "#1f2937", // لون الخلفية (مثل gray-800)
    },
  },
};

// بيانات وهمية للعملاء النشطين
const data: ChartData<"pie", number[], string> = {
  labels: mostActiveCustomers.map((customer) => customer.name),
  datasets: [
    {
      label: "Orders",
      data: mostActiveCustomers.map((customer) => customer.orders),
      backgroundColor: [
        "#3b82f6", // blue
        "#10b981", // green
        "#f59e0b", // yellow
        "#ef4444", // red
        "#8b5cf6", // violet
      ],
      borderColor: gridColor,
      borderWidth: 2,
    },
  ],
};



  return (
    <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl shadow w-full">
      <h2 className="text-lg font-bold mb-4">Most Active Customers</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MostActiveCustomersChart;
