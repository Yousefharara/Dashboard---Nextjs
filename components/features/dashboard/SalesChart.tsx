"use client"; // فقط لو كنت في Next.js داخل app directory

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

// تسجيل عناصر الشارت
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// بيانات الرسم البياني (مُعرّفة بالأنواع)
const data: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [1200, 1900, 1700, 2100, 3250],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

// بيانات الرسم البياني (مُعرّفة بالأنواع)
// const darkData: ChartData<"line"> = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//   datasets: [
//     {
//       label: "Monthly Sales",
//       data: [1200, 1900, 1700, 2100, 3250],
//       borderColor: "#f9f9f9",
//       backgroundColor: "rgba(59, 130, 246, 0.2)",
//       tension: 0.4,
//       fill: true,
//     },
//   ],
// };




// إعدادات الشارت
const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
  },
};

const SalesChart: React.FC = () => {
  return (  
    <div className="bg-white w-full p-4 rounded-xl dark:bg-neutral-900 shadow overflow-hidden">
      <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
