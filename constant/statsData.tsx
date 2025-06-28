import {
  ShoppingCart,
  Package,
  Users,
  DollarSign,
} from "lucide-react";

export const statsData = [
  {
    id: 1,
    title: "Total Orders",
    value: 142,
    icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 2,
    title: "Total Products",
    value: 87,
    icon: <Package className="w-6 h-6 text-green-500" />,
  },
  {
    id: 3,
    title: "Total Customers",
    value: 60,
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    id: 4,
    title: "Revenue",
    value: "$3,250",
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
  },
];
